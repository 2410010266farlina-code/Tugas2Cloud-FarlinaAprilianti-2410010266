# 1. Gunakan image dasar Node.js versi 18
FROM node:18-alpine

# 2. Tentukan folder kerja di dalam kontainer
WORKDIR /app

# 3. Salin file package.json terlebih dahulu
COPY package.json ./

# 4. Install library (Express) yang dibutuhkan
RUN npm install

# 5. Salin semua file aplikasi ke dalam kontainer
COPY . .

# 6. Buka port 3000 di kontainer
EXPOSE 3000

# 7. Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]