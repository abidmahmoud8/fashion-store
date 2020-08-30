-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 30 août 2020 à 23:17
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `fashion_store`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `gendre` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `level`, `gendre`, `imageUrl`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'hommes', 0, 'hommes', 'http://localhost:4000/images/slider_1.jpg', NULL, NULL, NULL),
(2, 'enfants', 0, 'enfants', 'http://localhost:4000/images/slider_2.jpg', NULL, NULL, NULL),
(3, 'femmes', 0, 'femmes', 'http://localhost:4000/images/slider_3.jpg', NULL, NULL, NULL),
(4, 'chemises', 1, 'hommes', 'http://localhost:4000/images/chemises.jpg', 1, NULL, NULL),
(5, 'costume', 1, 'hommes', 'http://localhost:4000/images/main-harvey-specter.jpg', 1, NULL, NULL),
(6, 'Chaussures', 1, 'hommes', 'http://localhost:4000/images/casual-chaussure-homme-basket-homme-respirant-d.jpg', 1, NULL, NULL),
(7, 'T-shirt', 1, 'hommes', 'http://localhost:4000/images/tshirt.jpg', 1, NULL, NULL),
(8, 'Pantalon', 1, 'hommes', 'http://localhost:4000/images/carnaby-pantalon-homme-navy.jpg', 1, NULL, NULL),
(9, 'model-1', 2, 'hommes', 'http://localhost:4000/images/no.png', 4, NULL, NULL),
(10, 'model-2', 2, 'hommes', 'http://localhost:4000/images/no.png', 4, NULL, NULL),
(11, 'model-3', 2, 'hommes', 'http://localhost:4000/images/no.png', 4, NULL, NULL),
(12, 'model-4', 2, 'hommes', 'http://localhost:4000/images/no.png', 4, NULL, NULL),
(13, 'model-5', 2, 'hommes', 'http://localhost:4000/images/no.png', 4, NULL, NULL),
(14, 'costume-1', 2, 'hommes', 'http://localhost:4000/images/no.png', 5, NULL, NULL),
(15, 'costume-2', 2, 'hommes', 'http://localhost:4000/images/no.png', 5, NULL, NULL),
(16, 'costume-3', 2, 'hommes', 'http://localhost:4000/images/no.png', 5, NULL, NULL),
(17, 'costume-4', 2, 'hommes', 'http://localhost:4000/images/no.png', 5, NULL, NULL),
(18, 'costume-5', 2, 'hommes', 'http://localhost:4000/images/no.png', 5, NULL, NULL),
(19, 'shoes-1', 2, 'hommes', 'http://localhost:4000/images/no.png', 6, NULL, NULL),
(20, 'shoes-2', 2, 'hommes', 'http://localhost:4000/images/no.png', 6, NULL, NULL),
(21, 'shoes-3', 2, 'hommes', 'http://localhost:4000/images/no.png', 6, NULL, NULL),
(22, 'shoes-4', 2, 'hommes', 'http://localhost:4000/images/no.png', 6, NULL, NULL),
(23, 'shoes-5', 2, 'hommes', 'http://localhost:4000/images/no.png', 6, NULL, NULL),
(24, 'shirt-1', 2, 'hommes', 'http://localhost:4000/images/no.png', 7, NULL, NULL),
(25, 'shirt-2', 2, 'hommes', 'http://localhost:4000/images/no.png', 7, NULL, NULL),
(26, 'shirt-3', 2, 'hommes', 'http://localhost:4000/images/no.png', 7, NULL, NULL),
(27, 'shirt-4', 2, 'hommes', 'http://localhost:4000/images/no.png', 7, NULL, NULL),
(28, 'shirt-5', 2, 'hommes', 'http://localhost:4000/images/no.png', 7, NULL, NULL),
(29, 'panta-1', 2, 'hommes', 'http://localhost:4000/images/no.png', 8, NULL, NULL),
(30, 'panta-2', 2, 'hommes', 'http://localhost:4000/images/no.png', 8, NULL, NULL),
(31, 'panta-3', 2, 'hommes', 'http://localhost:4000/images/no.png', 8, NULL, NULL),
(32, 'panta-4', 2, 'hommes', 'http://localhost:4000/images/no.png', 8, NULL, NULL),
(33, 'panta-5', 2, 'hommes', 'http://localhost:4000/images/no.png', 8, NULL, NULL),
(34, 'nouveautés', 1, 'hommes', 'http://localhost:4000/images/no.png', 1, NULL, NULL),
(35, 'chemises', 1, 'femmes', 'http://localhost:4000/images/chemise-en-voile-crepe-blanc-casse-femme-ww407_2_fcf1.jpg', 3, NULL, NULL),
(36, 'Pull', 1, 'femmes', 'http://localhost:4000/images/71-o+ths9SL._AC_UX385_.jpg', 3, NULL, NULL),
(37, 'Accessoires', 1, 'femmes', 'http://localhost:4000/images/bijoux-accessoires-femme-montres-cadeau-d-annivers.jpg', 3, NULL, NULL),
(38, 'robes', 1, 'femmes', 'http://localhost:4000/images/robe-femme-longue-impression-manches-longues-robe.jpg', 3, NULL, NULL),
(39, 'Pantalon', 1, 'enfants', 'http://localhost:4000/images/jean-enfant-garcon-en-coton-casual-pantalon-garcon.jpg', 2, NULL, NULL),
(40, 'Pull', 1, 'enfants', 'http://localhost:4000/images/sweat-enfant-pour-fille-imprime-donuts-vert.jpg', 2, NULL, NULL),
(41, 'Chaussure', 1, 'enfants', 'http://localhost:4000/images/chaussure-enfant-2017-hiver-marque-de-luxe-meilleu.jpg', 2, NULL, NULL),
(42, 'Robes', 1, 'enfants', 'http://localhost:4000/images/61IMKyAp3BL._AC_UX342_.jpg', 2, NULL, NULL),
(43, 'nouveautés', 1, 'enfants', 'http://localhost:4000/images/no.png', 2, NULL, NULL),
(44, 'nouveautés', 1, 'femmes', 'http://localhost:4000/images/no.png', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `command`
--

CREATE TABLE `command` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total_price` decimal(8,2) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `payement` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `command`
--

INSERT INTO `command` (`id`, `user_id`, `status`, `total_price`, `created_at`, `updated_at`, `payement`) VALUES
(32, 28, 'En cours', '555.00', NULL, NULL, 'payé'),
(33, 28, 'En cours', '981.00', NULL, NULL, 'non payé'),
(34, 28, 'En cours', '16.00', NULL, NULL, 'non payé');

-- --------------------------------------------------------

--
-- Structure de la table `commandline`
--

CREATE TABLE `commandline` (
  `id` int(10) UNSIGNED NOT NULL,
  `command_id` int(10) UNSIGNED NOT NULL,
  `item_id` int(10) UNSIGNED NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_qte` int(11) DEFAULT NULL,
  `item_price` int(11) DEFAULT NULL,
  `item_discount` int(11) NOT NULL,
  `item_total_price` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commandline`
--

INSERT INTO `commandline` (`id`, `command_id`, `item_id`, `item_name`, `item_qte`, `item_price`, `item_discount`, `item_total_price`, `created_at`, `updated_at`) VALUES
(24, 32, 25, 'chemise-3', 5, 75, 0, 375, NULL, NULL),
(25, 32, 24, 'Chemise-2', 8, 25, 10, 180, NULL, NULL),
(26, 33, 22, 'chaussure-4', 7, 120, 10, 756, NULL, NULL),
(27, 33, 25, 'chemise-3', 3, 75, 0, 225, NULL, NULL),
(28, 34, 20, 'chaussure-2', 1, 20, 20, 16, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `long_description` varchar(1000) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `images` text DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `discount` decimal(8,2) DEFAULT NULL,
  `quantities` int(11) DEFAULT NULL,
  `sizes` varchar(255) DEFAULT NULL,
  `colors` varchar(255) DEFAULT NULL,
  `gendre` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `items`
--

INSERT INTO `items` (`id`, `title`, `long_description`, `short_description`, `images`, `price`, `discount`, `quantities`, `sizes`, `colors`, `gendre`, `created_at`, `updated_at`) VALUES
(18, 'chaussure-1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam laboriosam? Dolores, incidunt reprehenderit. Porro ipsa laboriosam ratione magni eius laborum, amet dolorum debitis molestias nihil quisquam optio ut nesciunt, enim veniam dicta. Officia dolor voluptate ex. Iste, officiis quas tempora sapiente, quidem iusto, consectetur delectus praesentium a sunt maxime quos sed.\n', NULL, '[{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-1 (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-1_(1).jpg\",\"path\":\"images\\\\chaussurehomme-1_(1).jpg\",\"size\":10560},{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-1 (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-1_(2).jpg\",\"path\":\"images\\\\chaussurehomme-1_(2).jpg\",\"size\":11241},{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-1 (3).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-1_(3).jpg\",\"path\":\"images\\\\chaussurehomme-1_(3).jpg\",\"size\":9597}]', '25.00', '25.00', 25, 's,m', 'blanc,noire', 'hommes', '2020-08-30 15:44:38', '2020-08-30 15:44:38'),
(20, 'chaussure-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam laboriosam? Dolores, incidunt reprehenderit. Porro ipsa laboriosam ratione magni eius laborum, amet dolorum debitis molestias nihil quisquam optio ut nesciunt, enim veniam dicta. Officia dolor voluptate ex. Iste, officiis quas tempora sapiente, quidem iusto, consectetur delectus praesentium a sunt maxime quos sed.\n\n', 'chaussure-2', '[{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-2 (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-2_(1).jpg\",\"path\":\"images\\\\chaussurehomme-2_(1).jpg\",\"size\":24547},{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-2 (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-2_(2).jpg\",\"path\":\"images\\\\chaussurehomme-2_(2).jpg\",\"size\":17593},{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-2 (3).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-2_(3).jpg\",\"path\":\"images\\\\chaussurehomme-2_(3).jpg\",\"size\":26611}]', '20.00', '20.00', 19, 'm,l', 'noire,vert', 'hommes', '2020-08-30 15:49:21', '2020-08-30 15:49:21'),
(21, 'chaussure-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam laboriosam', 'chaussure-3', '[{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-3 (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-3_(1).jpg\",\"path\":\"images\\\\chaussurehomme-3_(1).jpg\",\"size\":16724},{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-3 (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-3_(2).jpg\",\"path\":\"images\\\\chaussurehomme-3_(2).jpg\",\"size\":18282},{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-3 (3).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-3_(3).jpg\",\"path\":\"images\\\\chaussurehomme-3_(3).jpg\",\"size\":21028}]', '50.00', '0.00', 50, 'm,l', 'vert,noire', 'hommes', '2020-08-30 15:50:12', '2020-08-30 15:50:12'),
(22, 'chaussure-4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam laboriosam', NULL, '[{\"fieldname\":\"image\",\"originalname\":\"chaussurehomme-4.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chaussurehomme-4.jpg\",\"path\":\"images\\\\chaussurehomme-4.jpg\",\"size\":16020}]', '120.00', '10.00', 13, 'l', 'vert,noire', 'hommes', '2020-08-30 15:50:54', '2020-08-30 15:50:54'),
(23, 'chemise-1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.\n', 'chemise-1', '[{\"fieldname\":\"image\",\"originalname\":\"bleuchemise (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"bleuchemise_(1).jpg\",\"path\":\"images\\\\bleuchemise_(1).jpg\",\"size\":126959},{\"fieldname\":\"image\",\"originalname\":\"bleuchemise (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"bleuchemise_(2).jpg\",\"path\":\"images\\\\bleuchemise_(2).jpg\",\"size\":60642}]', '50.00', '10.00', 25, 's,m', 'rouge,vert', 'hommes', '2020-08-30 15:53:36', '2020-08-30 15:53:36'),
(24, 'Chemise-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.\n', 'chemise-2', '[{\"fieldname\":\"image\",\"originalname\":\"c.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"c.jpg\",\"path\":\"images\\\\c.jpg\",\"size\":173311},{\"fieldname\":\"image\",\"originalname\":\"c1.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"c1.jpg\",\"path\":\"images\\\\c1.jpg\",\"size\":113825}]', '100.00', '10.00', 12, 'm,l', 'vert', 'hommes', '2020-08-30 15:54:18', '2020-08-30 15:54:18'),
(25, 'chemise-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.\n', 'chemise-3', '[{\"fieldname\":\"image\",\"originalname\":\"chemiseblanche (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemiseblanche_(1).jpg\",\"path\":\"images\\\\chemiseblanche_(1).jpg\",\"size\":64452},{\"fieldname\":\"image\",\"originalname\":\"chemiseblanche (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemiseblanche_(2).jpg\",\"path\":\"images\\\\chemiseblanche_(2).jpg\",\"size\":26963}]', '75.00', '0.00', 2, 's,m,l,xl', 'vert,noire,blanc,rouge', 'hommes', '2020-08-30 15:55:48', '2020-08-30 15:55:48'),
(26, 'robe-1', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.\n', 'robe-1', '[{\"fieldname\":\"image\",\"originalname\":\"robes (7).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(7).jpg\",\"path\":\"images\\\\robes_(7).jpg\",\"size\":13632},{\"fieldname\":\"image\",\"originalname\":\"robes (8).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(8).jpg\",\"path\":\"images\\\\robes_(8).jpg\",\"size\":12294},{\"fieldname\":\"image\",\"originalname\":\"robes (9).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(9).jpg\",\"path\":\"images\\\\robes_(9).jpg\",\"size\":11112}]', '250.00', '10.00', 10, 'm,l', 'noire,rouge', 'femmes', '2020-08-30 15:58:37', '2020-08-30 15:58:37'),
(27, 'robe-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.', 'robe', '[{\"fieldname\":\"image\",\"originalname\":\"robes (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(1).jpg\",\"path\":\"images\\\\robes_(1).jpg\",\"size\":20561},{\"fieldname\":\"image\",\"originalname\":\"robes (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(2).jpg\",\"path\":\"images\\\\robes_(2).jpg\",\"size\":22781},{\"fieldname\":\"image\",\"originalname\":\"robes (3).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(3).jpg\",\"path\":\"images\\\\robes_(3).jpg\",\"size\":41314}]', '180.00', NULL, 10, 'xl,l,m,s', 'rouge', 'femmes', '2020-08-30 16:00:50', '2020-08-30 16:00:50'),
(28, 'robe-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.\n\n', 'robe-3', '[{\"fieldname\":\"image\",\"originalname\":\"robes (4).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(4).jpg\",\"path\":\"images\\\\robes_(4).jpg\",\"size\":13974},{\"fieldname\":\"image\",\"originalname\":\"robes (5).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(5).jpg\",\"path\":\"images\\\\robes_(5).jpg\",\"size\":14789},{\"fieldname\":\"image\",\"originalname\":\"robes (6).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"robes_(6).jpg\",\"path\":\"images\\\\robes_(6).jpg\",\"size\":30039}]', '250.00', '0.00', 10, 'm,s', 'vert,rouge', 'femmes', '2020-08-30 16:01:21', '2020-08-30 16:01:21'),
(29, 'shoes-femme-1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.', 'shoes-1-femme', '[{\"fieldname\":\"image\",\"originalname\":\"chfemme (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chfemme_(1).jpg\",\"path\":\"images\\\\chfemme_(1).jpg\",\"size\":11656},{\"fieldname\":\"image\",\"originalname\":\"chfemme (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chfemme_(2).jpg\",\"path\":\"images\\\\chfemme_(2).jpg\",\"size\":10992},{\"fieldname\":\"image\",\"originalname\":\"chfemme (3).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chfemme_(3).jpg\",\"path\":\"images\\\\chfemme_(3).jpg\",\"size\":14347}]', '140.00', NULL, 10, 'm,l', 'vert,noire', 'femmes', '2020-08-30 16:02:18', '2020-08-30 16:02:18'),
(30, 'montre-1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis pariatur molestias perspiciatis, eveniet non, voluptas iste incidunt iusto architecto, commodi optio repudiandae veritatis repellat doloribus et eum neque? Quasi.', 'montre', '[{\"fieldname\":\"image\",\"originalname\":\"a.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"a.jpg\",\"path\":\"images\\\\a.jpg\",\"size\":28507},{\"fieldname\":\"image\",\"originalname\":\"a1.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"a1.jpg\",\"path\":\"images\\\\a1.jpg\",\"size\":41404},{\"fieldname\":\"image\",\"originalname\":\"a2.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"a2.jpg\",\"path\":\"images\\\\a2.jpg\",\"size\":39491}]', '550.00', '5.00', 5, 's', 'blanc', 'femmes', '2020-08-30 16:03:12', '2020-08-30 16:03:12'),
(31, 'chemise-1-femme', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam laboriosam? Dolores.', 'chemise-1', '[{\"fieldname\":\"image\",\"originalname\":\"chemise-femme (9).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemise-femme_(9).jpg\",\"path\":\"images\\\\chemise-femme_(9).jpg\",\"size\":26048},{\"fieldname\":\"image\",\"originalname\":\"chemise-femme (1).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemise-femme_(1).jpg\",\"path\":\"images\\\\chemise-femme_(1).jpg\",\"size\":15033},{\"fieldname\":\"image\",\"originalname\":\"chemise-femme (8).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemise-femme_(8).jpg\",\"path\":\"images\\\\chemise-femme_(8).jpg\",\"size\":15760}]', '55.00', '10.00', 20, 'm,l', 'vert,rouge', 'femmes', '2020-08-30 16:07:35', '2020-08-30 16:07:35'),
(32, 'chemises-femme-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel perspiciatis hic beatae praesentium quisquam qui voluptas pariatur quibusdam incidunt sapiente tempora voluptatem officia laborum autem, architecto cupiditate illum recusandae mollitia? Labore et veritatis ducimus, totam quasi velit iure autem blanditiis, ullam quo veniam possimus dolore, consequuntur at voluptatibus! Ad iste cupiditate beatae nulla asperiores tenetur totam ullam laboriosam? Dolores.', 'chemises-femme-3', '[{\"fieldname\":\"image\",\"originalname\":\"chemise-femme (2).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemise-femme_(2).jpg\",\"path\":\"images\\\\chemise-femme_(2).jpg\",\"size\":23087},{\"fieldname\":\"image\",\"originalname\":\"chemise-femme (3).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemise-femme_(3).jpg\",\"path\":\"images\\\\chemise-femme_(3).jpg\",\"size\":53725},{\"fieldname\":\"image\",\"originalname\":\"chemise-femme (4).jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"images\",\"filename\":\"chemise-femme_(4).jpg\",\"path\":\"images\\\\chemise-femme_(4).jpg\",\"size\":45003}]', '145.00', '0.00', 20, 's,m', 'vert,rouge', 'femmes', '2020-08-30 16:08:20', '2020-08-30 16:08:20');

-- --------------------------------------------------------

--
-- Structure de la table `item_category`
--

CREATE TABLE `item_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `item_category`
--

INSERT INTO `item_category` (`id`, `item_id`, `category_id`, `created_at`, `updated_at`) VALUES
(34, 18, 1, NULL, NULL),
(35, 18, 6, NULL, NULL),
(36, 18, 19, NULL, NULL),
(37, 18, 34, NULL, NULL),
(38, 20, 1, NULL, NULL),
(39, 20, 6, NULL, NULL),
(40, 20, 20, NULL, NULL),
(41, 20, 34, NULL, NULL),
(42, 21, 1, NULL, NULL),
(43, 21, 6, NULL, NULL),
(44, 21, 21, NULL, NULL),
(45, 21, 34, NULL, NULL),
(46, 22, 1, NULL, NULL),
(47, 22, 6, NULL, NULL),
(48, 22, 22, NULL, NULL),
(49, 22, 34, NULL, NULL),
(50, 23, 1, NULL, NULL),
(51, 23, 4, NULL, NULL),
(52, 23, 9, NULL, NULL),
(53, 23, 34, NULL, NULL),
(54, 24, 1, NULL, NULL),
(55, 24, 4, NULL, NULL),
(56, 24, 34, NULL, NULL),
(57, 24, 10, NULL, NULL),
(58, 25, 1, NULL, NULL),
(59, 25, 4, NULL, NULL),
(60, 25, 11, NULL, NULL),
(61, 25, 34, NULL, NULL),
(62, 26, 3, NULL, NULL),
(63, 26, 38, NULL, NULL),
(64, 26, 44, NULL, NULL),
(65, 27, 3, NULL, NULL),
(66, 27, 38, NULL, NULL),
(67, 27, 44, NULL, NULL),
(68, 28, 3, NULL, NULL),
(69, 28, 38, NULL, NULL),
(70, 28, 44, NULL, NULL),
(71, 29, 3, NULL, NULL),
(72, 29, 37, NULL, NULL),
(73, 29, 44, NULL, NULL),
(74, 30, 3, NULL, NULL),
(75, 30, 37, NULL, NULL),
(76, 31, 35, NULL, NULL),
(77, 31, 44, NULL, NULL),
(78, 31, 3, NULL, NULL),
(79, 32, 3, NULL, NULL),
(80, 32, 35, NULL, NULL),
(81, 32, 44, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20200815104647_user.js', 1, '2020-08-26 23:02:27'),
(2, '20200815114322_category.js', 1, '2020-08-26 23:02:29'),
(3, '20200815114335_item.js', 1, '2020-08-26 23:02:29'),
(4, '20200815114350_item_category.js', 1, '2020-08-26 23:02:34'),
(5, '20200815114415_command.js', 1, '2020-08-26 23:02:35'),
(6, '20200815114432_commandline.js', 1, '2020-08-26 23:02:39');

-- --------------------------------------------------------

--
-- Structure de la table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `adress`, `city`, `zip`, `country`, `password`, `created_at`, `updated_at`) VALUES
(28, 'abid', 'mahmoud', 'admin@admin.com', 'rue de la liberté', 'sfax', '3021', 'tunisie', '$2b$10$dOax1hdl.JbPJDlIdvgJV.LANBal8jccUaj6lIh4wKMRKpTdz6ibS', NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_parent_id_index` (`parent_id`);

--
-- Index pour la table `command`
--
ALTER TABLE `command`
  ADD PRIMARY KEY (`id`),
  ADD KEY `command_user_id_index` (`user_id`);

--
-- Index pour la table `commandline`
--
ALTER TABLE `commandline`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commandline_command_id_index` (`command_id`),
  ADD KEY `commandline_item_id_index` (`item_id`);

--
-- Index pour la table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `item_category`
--
ALTER TABLE `item_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_category_item_id_index` (`item_id`),
  ADD KEY `item_category_category_id_index` (`category_id`);

--
-- Index pour la table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `command`
--
ALTER TABLE `command`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `commandline`
--
ALTER TABLE `commandline`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `item_category`
--
ALTER TABLE `item_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT pour la table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `command`
--
ALTER TABLE `command`
  ADD CONSTRAINT `command_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `commandline`
--
ALTER TABLE `commandline`
  ADD CONSTRAINT `commandline_command_id_foreign` FOREIGN KEY (`command_id`) REFERENCES `command` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `commandline_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `item_category`
--
ALTER TABLE `item_category`
  ADD CONSTRAINT `item_category_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `item_category_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
