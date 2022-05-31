# IAI_Ti-HeF

## Ketika baru clone pake command dibawah dulu

> npm install

## Front End

Bagian front-end dibikin di folder ti-hef

## Back end

Bagian Back end dibikin di folder server

## API Customer

### Mendapatkan list customer

> (GET)localhost:8080/customer/

### Register

kirim username, password dan email lewat body

> (POST)localhost:8080/customer/

### Login

kirim username dan password lewat body

> (POST)localhost:8080/customer/login

### Delete Customer

kirim _id lewat body

>(DELETE)localhost:8080/customer/delete

## Food API

### Mendapatkan list makanan

>(GET)localhost:8080/food/

### Menambahkan makanan

Kirim name, image(url), price dan status lewat body

>(POST)localhost:8080/food/

### Mengupdate Makanan

Kirim _id dan bagian yg mau diupdate(name/image/price/status) lewat body

>(PATCH)localhost:8080/food/

### Menghapus makanan

Kirim _id lewat body

>(DELETE)localhost:8080/food/

## Order API

### List Order

>(GET)localhost:8080/order

## Menerima detail 1 order

>(GET)localhost:8080/order/:id

## Menambahkan Order

Kirim customerID, orderDate, foodList(id makanan), totalPrice, dan delivired lewat body

>(POST)localhost:8080/order/

##Mengupdate Order

Kirim _id, field yang diupdate lewat body

>(PATCH)localhost:8080/order

## Menghapus Order

Kirim _id lewat body

>(DELETE)localhost:8080/order
