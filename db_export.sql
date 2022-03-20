-- --------------------------------------------------------
-- Hostiteľ:                     127.0.0.1
-- Verze serveru:                10.4.22-MariaDB - mariadb.org binary distribution
-- OS serveru:                   Win64
-- HeidiSQL Verzia:              11.0.0.6097
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Exportování struktury databáze pro
CREATE DATABASE IF NOT EXISTS `anonymous_blog` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `anonymous_blog`;

-- Exportování struktury pro tabulka anonymous_blog.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `heading` tinytext DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `date_created` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Exportování dat pro tabulku anonymous_blog.posts: ~3 rows (přibližně)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT IGNORE INTO `posts` (`id`, `heading`, `content`, `date_created`) VALUES
	(11, 'First Article Here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', '2022-03-19 12:20:22'),
	(12, 'Second here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2022-03-19 12:20:24');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Exportování struktury pro tabulka anonymous_blog.posts_to_tags
CREATE TABLE IF NOT EXISTS `posts_to_tags` (
  `tag_name` tinytext DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportování dat pro tabulku anonymous_blog.posts_to_tags: ~6 rows (přibližně)
/*!40000 ALTER TABLE `posts_to_tags` DISABLE KEYS */;
INSERT IGNORE INTO `posts_to_tags` (`tag_name`, `post_id`) VALUES
	('loremipsum', 12),
	('first', 12),
	('happy', 11),
	('here', 11),
	('for you', 11);
/*!40000 ALTER TABLE `posts_to_tags` ENABLE KEYS */;

-- Exportování struktury pro tabulka anonymous_blog.tags
CREATE TABLE IF NOT EXISTS `tags` (
  `name` tinytext NOT NULL,
  UNIQUE KEY `name` (`name`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportování dat pro tabulku anonymous_blog.tags: ~9 rows (přibližně)
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT IGNORE INTO `tags` (`name`) VALUES
	('lorem'),
	('first'),
	('article'),
	('loremipsum'),
	('happy'),
	('here'),
	('for you');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
