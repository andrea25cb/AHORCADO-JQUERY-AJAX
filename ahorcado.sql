-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-12-2022 a las 15:50:35
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ahorcado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabra`
--

CREATE TABLE `palabra` (
  `id` int(50) NOT NULL,
  `palabra` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `palabra`
--

INSERT INTO `palabra` (`id`, `palabra`, `categoria`) VALUES
(1, 'españa', 'paises'),
(2, 'francia', 'paises'),
(3, 'noruega', 'paises'),
(4, 'alemania', 'paises'),
(5, 'pizza', 'comidas'),
(6, 'chorizo', 'comidas'),
(7, 'lentejas', 'comidas'),
(8, 'tortilla', 'comidas'),
(9, 'gorila', 'animales'),
(10, 'panda', 'animales'),
(11, 'caballo', 'animales'),
(12, 'delfin', 'animales'),
(32, 'caca', 'caca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `puntuacion` int(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`id`, `usuario`, `puntuacion`, `fecha`) VALUES
(1, 'daniel', 42, '2022-12-23'),
(4, 'daniel', 20, '2022-12-15'),
(10, 'usuario', 10, '2022-12-18'),
(11, 'usuario', 7, '2022-12-18'),
(12, 'usuario', 10, '2022-12-18'),
(13, 'usuario', 10, '2022-12-18'),
(14, 'usuario', 10, '2022-12-18'),
(15, 'usuario', -4, '2022-12-18'),
(16, '', -4, '2022-12-18'),
(17, '', -2, '2022-12-18'),
(18, '', 6, '2022-12-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(9) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `contra` varchar(100) NOT NULL,
  `nivel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `contra`, `nivel`) VALUES
(1, 'admin', '1234', 'admin'),
(2, 'usuario', 'usuario', 'usuario'),
(3, 'raquel', 'raquel123', 'usuario'),
(11, 'andreina', '123', 'usuario'),
(35, 'andrea25cb', '123', 'usuario'),
(36, 'aaa', 'aaaa', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `palabra`
--
ALTER TABLE `palabra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `palabra`
--
ALTER TABLE `palabra`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
