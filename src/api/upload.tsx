import { Dropbox } from 'dropbox';
import { getCookie } from "cookies-next";
import { handlerRefreshToken } from './refreshTokenDropbox';

export const uploadToDropbox = async (file: any): Promise<string | null> => {
  let accessToken = getCookie('dropbox_demo');

  if (!accessToken) {
    const data = await handlerRefreshToken();
    if (data) {
      accessToken = getCookie('dropbox_demo');
    } else {
      return null;
    }
  }

  const dbx = new Dropbox({ accessToken });

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async function (event: any) {
      const fileContent = event.target.result;

      try {
        // Upload file lên Dropbox
        const response = await dbx.filesUpload({
          path: `/${file.name}`,
          contents: fileContent,
        });

        // Tạo link chia sẻ công khai
        const linkResponse = await dbx.sharingCreateSharedLink({
          path: response.result.path_lower || '',
        });

        // Trả về link nếu thành công
        resolve(linkResponse.result.url);
      } catch (error) {
        console.error('Error uploading to Dropbox:', error);
        // Trả về null nếu có lỗi
        resolve(null);
      }
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      resolve(null);
    };

    reader.readAsArrayBuffer(file);
  });
};
