import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customers: Customer[] = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Nam",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Thị Linh",
      birthDay: "20-12-1990",
      gender: "Nữ",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Bình",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Quảng Nam",
      type: {id: 1, name: "Diamond"}
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Lê Văn Long",
      birthDay: "20-12-1990",
      gender: "Nam",
      idCard: "982379821",
      phone: "0911111111",
      email: "nam@gmail.com",
      address: "Đà Nẵng",
      type: {id: 1, name: "Diamond"}
    },
  ];

  getAll() {
    return this.customers;
  }

  save(customer: Customer) {
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(product => product.id === id);
  }

  update(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }

  delete(id: number) {
    this.customers = this.customers.filter(customer => {
      return customer.id !== id;
    });
  }
}
