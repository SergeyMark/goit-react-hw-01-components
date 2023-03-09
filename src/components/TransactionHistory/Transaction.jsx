import css from './Transaction.module.css';
import { TransactionBody } from './TransactionBody';

export const TransactionHistory = ({transactions}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <TransactionBody transactions={transactions}/>
        </table>
    )
}



