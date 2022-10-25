
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TrasactionsContext";
import { SearchForm } from "./components/SeachForm";
import { PriceHiglight, TransactionConteiner, TransactionTable} from './styles'

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return(
    <div>
      <Header />
      <Summary />

      <TransactionConteiner>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {
              transactions.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHiglight variant={transaction.type}>{transaction.price}</PriceHiglight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })

            }
          </tbody>
        </TransactionTable>
      </TransactionConteiner>
    </div>
  )
}