import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
