--
-- PostgreSQL database dump
--

\restrict krqUEi0RCkLiPHNDJZARiAPUH3pzkNqvR2ONfHN6xfRxOY3UDH4PzncZET5zL04

-- Dumped from database version 18.0
-- Dumped by pg_dump version 18.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: asset; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asset (
    asset_id integer NOT NULL,
    asset_name character varying NOT NULL,
    category character varying NOT NULL,
    stock_quantity character varying NOT NULL
);


ALTER TABLE public.asset OWNER TO postgres;

--
-- Name: asset_asset_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.asset_asset_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.asset_asset_id_seq OWNER TO postgres;

--
-- Name: asset_asset_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.asset_asset_id_seq OWNED BY public.asset.asset_id;


--
-- Name: asset asset_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asset ALTER COLUMN asset_id SET DEFAULT nextval('public.asset_asset_id_seq'::regclass);


--
-- Data for Name: asset; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asset (asset_id, asset_name, category, stock_quantity) FROM stdin;
5	Fira	Non-Consumable	26
\.


--
-- Name: asset_asset_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.asset_asset_id_seq', 5, true);


--
-- Name: asset PK_2a48e81afa7729ed31c2c7b18ed; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asset
    ADD CONSTRAINT "PK_2a48e81afa7729ed31c2c7b18ed" PRIMARY KEY (asset_id);


--
-- PostgreSQL database dump complete
--

\unrestrict krqUEi0RCkLiPHNDJZARiAPUH3pzkNqvR2ONfHN6xfRxOY3UDH4PzncZET5zL04

