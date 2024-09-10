'use server'

import fs from "fs";
import path from 'path';

// Đường dẫn đến file JSON lưu trữ token
const filePath = path.resolve(process.cwd(), 'data', 'token.json');

// Đọc token từ file
export const readTokenFromFile = () => {
  const tokenData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(tokenData).accessToken;
};

// Ghi token mới vào file
export const writeTokenToFile = (newToken: string) => {
  const tokenData = {
    accessToken: newToken,
  };
  fs.writeFileSync(filePath, JSON.stringify(tokenData), 'utf-8');
};
