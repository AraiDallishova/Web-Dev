-- 1. CREATE DATABASE
CREATE DATABASE flight_booking_system;
\c flight_booking_system;

---

-- 2. CREATE TABLES

-- PASSENGER --------------------------------------------
CREATE TABLE passenger (
passenger_id SERIAL PRIMARY KEY,
full_name VARCHAR(100) NOT NULL,
email VARCHAR(120) UNIQUE NOT NULL,
phone VARCHAR(20),
passport_number VARCHAR(20) UNIQUE,
CHECK (char_length(full_name) > 2)
);

-- AIRCRAFT ----------------------------------------------
CREATE TABLE aircraft (
aircraft_id SERIAL PRIMARY KEY,
model VARCHAR(50) NOT NULL,
capacity INT NOT NULL,
CHECK (capacity > 50 AND capacity <= 400)
);

-- FLIGHT ------------------------------------------------
CREATE TABLE flight (
flight_id SERIAL PRIMARY KEY,
flight_number VARCHAR(20) UNIQUE NOT NULL,
origin VARCHAR(50) NOT NULL,
destination VARCHAR(50) NOT NULL,
departure_time TIMESTAMP NOT NULL,
arrival_time TIMESTAMP NOT NULL,
aircraft_id INT REFERENCES aircraft(aircraft_id) ON DELETE SET NULL,
CHECK (origin <> destination),
CHECK (arrival_time > departure_time)
);

-- BOOKING -----------------------------------------------
CREATE TABLE booking (
booking_id SERIAL PRIMARY KEY,
passenger_id INT REFERENCES passenger(passenger_id) ON DELETE CASCADE,
flight_id INT REFERENCES flight(flight_id) ON DELETE CASCADE,
booking_date DATE NOT NULL,
status VARCHAR(20) NOT NULL,
CHECK (status IN ('pending','confirmed','cancelled'))
);

-- TICKET ------------------------------------------------
CREATE TABLE ticket (
ticket_id SERIAL PRIMARY KEY,
booking_id INT UNIQUE REFERENCES booking(booking_id) ON DELETE CASCADE,
seat_number VARCHAR(10) NOT NULL,
price NUMERIC(10,2) NOT NULL,
CHECK (price > 0)
);

-- PAYMENT -----------------------------------------------
CREATE TABLE payment (
payment_id SERIAL PRIMARY KEY,
booking_id INT UNIQUE REFERENCES booking(booking_id) ON DELETE CASCADE,
amount NUMERIC(10,2) NOT NULL,
payment_date DATE NOT NULL,
method VARCHAR(20) NOT NULL,
CHECK (method IN ('card','cash','online'))
);


-- SAMPLE DATA --------------------------------------------------

-- PASSENGER (20 rows)
INSERT INTO passenger (full_name, email, phone, passport_number) VALUES
('Aruzhan Tleu', '[aruzhan@mail.com](mailto:aruzhan@mail.com)', '87011112233', 'KZ123456'),
('Dias Nurpeiis', '[dias@mail.com](mailto:dias@mail.com)', '87025556677', 'KZ654321'),
('Aigul Samat', '[aigul@mail.com](mailto:aigul@mail.com)', '87039998877', 'KZ111222'),
('Alikhan Kadyrov', '[alikhan@mail.com](mailto:alikhan@mail.com)', '87057778899', 'KZ222333'),
('Dana Zhakan', '[dana@mail.com](mailto:dana@mail.com)', '87041234567', 'KZ333444'),
('Miras Ospan', '[miras@mail.com](mailto:miras@mail.com)', '87028889900', 'KZ444555'),
('Asem Omar', '[asem@mail.com](mailto:asem@mail.com)', '87035557788', 'KZ555666'),
('Nurzhan Serik', '[nurzhan@mail.com](mailto:nurzhan@mail.com)', '87036669900', 'KZ666777'),
('Adina Bek', '[adina@mail.com](mailto:adina@mail.com)', '87031112255', 'KZ777888'),
('Dias Seid', '[dias2@mail.com](mailto:dias2@mail.com)', '87039995544', 'KZ888999'),
('Saltanat Kaiyr', '[sultan@mail.com](mailto:sultan@mail.com)', '87030004455', 'KZ999000'),
('Yerbol Nurtas', '[yerbol@mail.com](mailto:yerbol@mail.com)', '87056668899', 'KZ101010'),
('Nazerke Abzal', '[nazerke@mail.com](mailto:nazerke@mail.com)', '87042223344', 'KZ202020'),
('Zhanna Askar', '[zhanna@mail.com](mailto:zhanna@mail.com)', '87031113322', 'KZ303030'),
('Kamila Adil', '[kamila@mail.com](mailto:kamila@mail.com)', '87070001122', 'KZ404040'),
('Serikbol Adil', '[serik@mail.com](mailto:serik@mail.com)', '87023334455', 'KZ505050'),
('Aruzhan Omar', '[aruzhan2@mail.com](mailto:aruzhan2@mail.com)', '87029991100', 'KZ606060'),
('Aruzhan Kassym', '[aruzhan3@mail.com](mailto:aruzhan3@mail.com)', '87027778899', 'KZ707070'),
('Dana Seilkhan', '[dana2@mail.com](mailto:dana2@mail.com)', '87031112200', 'KZ808080'),
('Madina Ualikhan', '[madina@mail.com](mailto:madina@mail.com)', '87039992211', 'KZ909090');

-- AIRCRAFT (20 rows)
INSERT INTO aircraft (model, capacity) VALUES
('Airbus A320', 180),
('Boeing 737', 160),
('Airbus A321', 190),
('Boeing 757', 200),
('Boeing 777', 350),
('Airbus A330', 290),
('Embraer E190', 110),
('Airbus A350', 300),
('Boeing 767', 250),
('Boeing 787', 280),
('Airbus A319', 150),
('Airbus A380', 400),
('Boeing 720', 140),
('Embraer E175', 100),
('Airbus A310', 200),
('Boeing 717', 120),
('Airbus A318', 150),
('Boeing 737 MAX', 200),
('Airbus A340', 320),
('Boeing 767-300', 260);

-- FLIGHT (20 rows)
INSERT INTO flight (flight_number, origin, destination, departure_time, arrival_time, aircraft_id)
VALUES
('KC101','Astana','Almaty','2025-01-11 09:00','2025-01-11 10:30',1),
('KC102','Almaty','Astana','2025-01-11 14:00','2025-01-11 15:30',1),
('KC203','Astana','Dubai','2025-01-12 05:00','2025-01-12 09:00',5),
('KC204','Dubai','Astana','2025-01-13 14:00','2025-01-13 18:00',5),
('KC305','Astana','London','2025-01-14 06:00','2025-01-14 12:00',9),
('KC306','London','Astana','2025-01-15 15:00','2025-01-15 21:00',9),
('KC407','Almaty','Seoul','2025-01-16 08:00','2025-01-16 14:00',6),
('KC408','Seoul','Almaty','2025-01-17 07:00','2025-01-17 13:00',6),
('KC509','Astana','Paris','2025-01-18 06:00','2025-01-18 12:00',4),
('KC510','Paris','Astana','2025-01-19 16:00','2025-01-19 22:00',4),
('KC601','Astana','Istanbul','2025-01-20 05:00','2025-01-20 09:00',3),
('KC602','Istanbul','Astana','2025-01-21 11:00','2025-01-21 15:00',3),
('KC703','Almaty','Berlin','2025-01-22 09:00','2025-01-22 15:00',7),
('KC704','Berlin','Almaty','2025-01-23 12:00','2025-01-23 18:00',7),
('KC805','Astana','Rome','2025-01-24 07:00','2025-01-24 11:00',12),
('KC806','Rome','Astana','2025-01-25 13:00','2025-01-25 17:00',12),
('KC907','Almaty','Madrid','2025-01-26 07:00','2025-01-26 13:00',14),
('KC908','Madrid','Almaty','2025-01-27 14:00','2025-01-27 20:00',14),
('KC111','Astana','Tbilisi','2025-01-28 09:00','2025-01-28 12:00',11),
('KC112','Tbilisi','Astana','2025-01-29 15:00','2025-01-29 18:00',11);

-- BOOKING (20 rows)
INSERT INTO booking (passenger_id, flight_id, booking_date, status)
VALUES
(1,1,'2025-01-02','confirmed'),
(2,1,'2025-01-02','confirmed'),
(3,2,'2025-01-03','pending'),
(4,3,'2025-01-04','confirmed'),
(5,4,'2025-01-05','cancelled'),
(6,5,'2025-01-05','confirmed'),
(7,6,'2025-01-06','confirmed'),
(8,7,'2025-01-07','pending'),
(9,8,'2025-01-07','confirmed'),
(10,9,'2025-01-08','confirmed'),
(11,10,'2025-01-08','pending'),
(12,11,'2025-01-09','confirmed'),
(13,12,'2025-01-09','cancelled'),
(14,13,'2025-01-10','confirmed'),
(15,14,'2025-01-10','pending'),
(16,15,'2025-01-10','confirmed'),
(17,16,'2025-01-11','confirmed'),
(18,17,'2025-01-11','pending'),
(19,18,'2025-01-12','confirmed'),
(20,19,'2025-01-12','confirmed');

-- TICKET (20 rows)
INSERT INTO ticket (booking_id, seat_number, price)
VALUES
(1,'12A',45000),(2,'12B',45000),(3,'14C',45000),(4,'20A',90000),(5,'20B',90000),
(6,'18A',120000),(7,'18B',120000),(8,'11C',110000),(9,'3A',110000),(10,'4B',150000),
(11,'5A',150000),(12,'6C',85000),(13,'7B',85000),(14,'9A',60000),(15,'10C',60000),
(16,'14A',70000),(17,'15B',70000),(18,'16C',90000),(19,'17D',95000),(20,'21A',90000);

-- PAYMENT (20 rows)
INSERT INTO payment (booking_id, amount, payment_date, method)
VALUES
(1,45000,'2025-01-02','card'),
(2,45000,'2025-01-02','online'),
(3,45000,'2025-01-03','cash'),
(4,90000,'2025-01-04','card'),
(5,0,'2025-01-05','online'),
(6,120000,'2025-01-05','card'),
(7,120000,'2025-01-06','online'),
(8,110000,'2025-01-07','cash'),
(9,110000,'2025-01-07','card'),
(10,150000,'2025-01-08','card'),
(11,150000,'2025-01-08','online'),
(12,85000,'2025-01-09','card'),
(13,85000,'2025-01-09','cash'),
(14,60000,'2025-01-10','card'),
(15,60000,'2025-01-10','online'),
(16,70000,'2025-01-10','cash'),
(17,70000,'2025-01-11','card'),
(18,90000,'2025-01-11','online'),
(19,95000,'2025-01-12','card'),
(20,90000,'2025-01-12','cash');


-- 1) Простой B-tree индекс (часто используемое поле)
CREATE INDEX idx_flight_departure_time
ON flight(departure_time);

-- 2) Составной индекс (multi-column)
CREATE INDEX idx_booking_passenger_flight
ON booking(passenger_id, flight_id);

-- 3) Уникальный индекс (дополнительный, кроме PK/UNIQUE)
CREATE UNIQUE INDEX idx_unique_ticket_seat
ON ticket(seat_number);

-- 4) Функциональный индекс
-- LOWER(email) ускоряет поиск по email без учета регистра
CREATE INDEX idx_lower_passenger_email
ON passenger(LOWER(email));

-- 5) Частичный индекс
-- Индекс только для confirmed booking
CREATE INDEX idx_confirmed_bookings
ON booking(booking_id)
WHERE status = 'confirmed';

-- 1. INNER JOIN: список всех билетов с информацией о пассажирах
SELECT p.full_name, f.flight_number, t.seat_number, t.price
FROM ticket t
JOIN booking b ON t.booking_id = b.booking_id
JOIN passenger p ON b.passenger_id = p.passenger_id
JOIN flight f ON b.flight_id = f.flight_id;

-- 2. LEFT JOIN: все пассажиры и их бронирования
SELECT p.full_name, b.booking_id, b.status
FROM passenger p
LEFT JOIN booking b ON p.passenger_id = b.passenger_id;

-- 3. TOP-5 flights with most bookings
SELECT f.flight_number, COUNT(b.booking_id) AS total_bookings
FROM flight f
JOIN booking b ON f.flight_id = b.flight_id
GROUP BY f.flight_number
ORDER BY total_bookings DESC
LIMIT 5;

-- 4. Найти самый популярный маршрут
SELECT origin, destination, COUNT(*) AS count
FROM flight
GROUP BY origin, destination
ORDER BY count DESC
LIMIT 1;

-- 5. SUBQUERY в WHERE: пассажиры с более чем 1 бронированием
SELECT full_name
FROM passenger
WHERE passenger_id IN (
SELECT passenger_id
FROM booking
GROUP BY passenger_id
HAVING COUNT(*) > 1
);

-- 6. SUBQUERY в FROM: общая цена билетов по каждому пассажиру
SELECT full_name, total_spent
FROM (
SELECT b.passenger_id, SUM(t.price) AS total_spent
FROM ticket t
JOIN booking b ON t.booking_id = b.booking_id
GROUP BY b.passenger_id
) AS x
JOIN passenger p ON x.passenger_id = p.passenger_id;

-- 7. Все рейсы, которые ещё не вылетели
SELECT flight_number, departure_time
FROM flight
WHERE departure_time > NOW();

-- 8. Использование индекса LOWER(email)
SELECT *
FROM passenger
WHERE LOWER(email) = LOWER('[DIAS2@mail.com](mailto:DIAS2@mail.com)');

-- 9. Бронирования только со статусом confirmed (partial index)
SELECT booking_id, passenger_id
FROM booking
WHERE status = 'confirmed';

-- 10. Самые дорогие билеты (TOP 5)
SELECT ticket_id, price
FROM ticket
ORDER BY price DESC
LIMIT 5;

-- 11. GROUP BY: доход от каждого рейса
SELECT f.flight_number, SUM(p.amount) AS revenue
FROM payment p
JOIN booking b ON p.booking_id = b.booking_id
JOIN flight f ON b.flight_id = f.flight_id
GROUP BY f.flight_number
ORDER BY revenue DESC;

-- 12. Перелёты самолёта Airbus A320
SELECT f.flight_number, f.origin, f.destination
FROM flight f
JOIN aircraft a ON f.aircraft_id = a.aircraft_id
WHERE a.model = 'Airbus A320';

-- CREATE ROLES -----------------------------------------

CREATE ROLE admin NOINHERIT;
CREATE ROLE manager NOINHERIT;
CREATE ROLE viewer NOINHERIT;

-- GRANT PERMISSIONS -------------------------------------

-- Admin = full access
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO admin;

-- Manager = read + insert + update
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO manager;

-- Viewer = only read
GRANT SELECT ON ALL TABLES IN SCHEMA public TO viewer;

-- CREATE USERS ------------------------------------------

CREATE USER user_admin WITH PASSWORD 'admin123';
CREATE USER user_manager WITH PASSWORD 'manager123';

-- ASSIGN ROLES ------------------------------------------

GRANT admin TO user_admin;
GRANT manager TO user_manager;

BEGIN;

-- 1) Создать бронирование
INSERT INTO booking (passenger_id, flight_id, booking_date, status)
VALUES (1, 3, CURRENT_DATE, 'confirmed')
RETURNING booking_id;

-- Допустим booking_id = 21

-- 2) Создать билет
INSERT INTO ticket (booking_id, seat_number, price)
VALUES (21, '22A', 75000);

-- 3) Создать оплату
INSERT INTO payment (booking_id, amount, payment_date, method)
VALUES (21, 75000, CURRENT_DATE, 'card');

COMMIT;
