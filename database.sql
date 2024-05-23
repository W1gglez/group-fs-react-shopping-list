-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE inventory (
	"id" serial primary key,
	 "name" varChar(80) not null,
	"quantity" float not null,
	"unit" varchar(20)
);

Select * From inventory;

INSERT INTO inventory ("name", "quantity", "unit")
 VALUES 
 ('Milk', '5', 'gallons'),
 ('Eggs', '35', 'cartons'),
 ('Bacon', '250', 'lbs');