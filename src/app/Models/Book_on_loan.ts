import { Book } from "./Book"
import { Lend } from "./Lend"

export class Book_On_loan{
   id!:number
   bookId!:number
   book!:Book
   lend!:Lend
   lendId!:number 
}