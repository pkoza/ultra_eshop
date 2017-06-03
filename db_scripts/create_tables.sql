CREATE TABLE PRODUCT (
    ProductID int NOT NULL,
    ProductName varchar(255),
    Description varchar(255),
    PRIMARY KEY (ProductID)
);
CREATE TABLE ORDER_PRODUCT_QUANTITY(
	OrpID int NOT NULL,
	OrderID int NOT NULL,
	ProductID int NOT NULL,
	Quantity int,
	PRIMARY KEY (OrpID),
	FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID)
);
CREATE TABLE ORDER(
	OrderID int NOT NULL,
	Address varchar(255),
	PRIMARY KEY (OrderID)
);


