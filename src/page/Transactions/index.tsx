
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SeachForm";
import { PriceHiglight, TransactionConteiner, TransactionTable} from './styles'

export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />

      <TransactionConteiner>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHiglight variant="income"> R$ 12.000,00</PriceHiglight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHiglight variant="outcome">- R$ 59.,00</PriceHiglight>
              </td>                
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionConteiner>
    </div>
  )
}