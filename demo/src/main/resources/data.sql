-- Données pour task
INSERT INTO task (title, completed) VALUES 
('Acheter du lait', false),
('Réviser le projet', false),
('Faire du sport', true),
('Appeler le docteur', false);

-- Données pour dbuser
INSERT INTO dbuser (username, password, role) VALUES 
('dbuser', '$2y$10$.qkbukzzX21D.bqbI.B2R.tvWP90o/Y16QRWVLodw51BHft7ZWbc.', 'USER'),
('dbadmin', '$2y$10$kp1V7UYDEWn17WSK16UcmOnFd1mPFVF6UkLrOOCGtf24HOYt8p1iC', 'ADMIN');
