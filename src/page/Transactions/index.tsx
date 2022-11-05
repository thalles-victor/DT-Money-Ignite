import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TrasactionsContext'
import { dateFormater, priceFormater } from '../../utils/formatter'
import { SearchForm } from './components/SeachForm'
import { PriceHiglight, TransactionConteiner, TransactionTable } from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionConteiner>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHiglight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormater.format(transaction.price)}
                    </PriceHiglight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormater.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionConteiner>
    </div>
  )
}
