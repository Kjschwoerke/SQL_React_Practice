Select * from showsCREATE TABLE `shows` (
  `id` int(11) NOT NULL AUTO_INCREMENTid,
  `title` varchar(45) DEFAULT NULL,
  `about` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Delete from shows where id=45