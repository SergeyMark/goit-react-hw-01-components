import PropTypes from 'prop-types';


export const TransactionBody = ({ transactions }) => {
    return (
            <tbody>
              {transactions.map(({id, type, amount, currency}) => 
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
              )}
            </tbody>
        ) 
}

TransactionBody.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};


