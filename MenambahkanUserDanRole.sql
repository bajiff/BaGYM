use DB_KaryawanHakAkses;
-- 1. Membuat User MySQL Baru
CREATE USER 'admin_db'@'localhost' IDENTIFIED BY 'Passwordadmin123!@';
CREATE USER 'pimpinan_db'@'localhost' IDENTIFIED BY 'Passwordpimpinan123!@';
CREATE USER 'staf_db'@'localhost' IDENTIFIED BY 'PasswordStaf123!@';

-- 2. GRANT (Memberi Hak Akses)

-- A. ADMIN (Bisa Segalanya: CRUD)
GRANT ALL PRIVILEGES ON DB_Karyawan.* TO 'admin_db'@'localhost';

-- B. PIMPINAN (Cuma Bisa Lihat/SELECT)
GRANT SELECT ON DB_Karyawan.* TO 'pimpinan_db'@'localhost';

-- C. STAF (Cuma Bisa Lihat/SELECT)
GRANT SELECT ON DB_Karyawan.* TO 'staf_db'@'localhost';

-- 3. Terapkan Perubahan
FLUSH PRIVILEGES;


