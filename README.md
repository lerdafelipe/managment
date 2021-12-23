# Business managment app

---

This project was created by me for one litle starup. It was created to make easier and automate the process of managment. With this app you can register your sales, your incomes, you statistics, etc.

---

## Table of Contents

1.[General Info 🚀](#general-info) 2.[Technologies 📋](#technologies) 3.[Installation 🔧](#installation)

---

### General Info

<a name="general-info"></a>
The project was ended and was delivered, but if I learn more technologies and see that technology is better for the project, I will add it because i want the best portfolio posible. The initial view has two buttons, the first to download a product list in a file .csv, the second opens a popup window to add a new product, a search bar and a table with the existing products, the table contains product info, and two buttons, the first to remove the product from DDBB and the second to edit the product info.
The view /ventas, temporarily, contain a table with the daily sales and information about them. Soon, I thought to add statistics, a redirect to sale-details for each sale.
The view /compras contains a product cards list to add products to the cart and them record the daily sale.
Finally, the view /cart, contains a table of products added to the cart with information of the daily sale and an input type date to select the day to record.

---

### Technologies

<a name="technologies"></a>
Obviusly i used create-react-app for deployed the project.

#### [React Icons](https://react-icons.github.io/react-icons/search)

I used the icons of this library because I think that icons were customizable to my UI.

#### [Formik](https://formik.org/)

I used this library for send the data to firebasa anda validate it.

#### [PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

I used Proptypes for check the component's props.

#### [Firebase](https://firebase.google.com/?hl=es-419&gclid=CjwKCAjwi9-HBhACEiwAPzUhHBUtSOn1dK1yquj6lZDd_yVaoacsvbOt_hKhL160AHLSf6jhzdg2WBoC6tAQAvD_BwE&gclsrc=aw.ds)

I used firebase for send the orders to the database and get the products and the orders.

#### [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)

I used this for the routing of the webapp.

#### [React-csv](https://www.npmjs.com/package/react-csv)

I used this package to download the products in a file .csv

---

### Installation

<a name="installation"></a>
This is a little intro about the installation

```
   1. First for get the project run the next command
$ git clone https://github.com/lerdafelipe/this-project

    2.Then locate yourself in the folder of the projec
$ cd ../path/to/the/file
    3.Then install the dependencies with the command npm install or npm i
$ npm install
    4.Finally, with the command npm run start initialize the project at the port localhost:3000
$ npm run start
```
