CREATE TABLE public.attribute (
    id integer NOT NULL,
    name character varying NOT NULL,
    "categoryId" integer
);
ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);

CREATE TABLE public.attributes_option (
    id integer NOT NULL,
    value character varying NOT NULL,
    "attributeId" integer
);

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying NOT NULL
);

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL,
    sku character varying NOT NULL,
    brand character varying NOT NULL,
    price integer NOT NULL,
    "categoryId" integer
);

CREATE TABLE public.product_attribute (
    id integer NOT NULL,
    value character varying NOT NULL,
    "attributeId" integer,
    "productId" integer
);