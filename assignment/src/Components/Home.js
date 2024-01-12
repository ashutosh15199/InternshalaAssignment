import './home.css';
import IMG from '../assets/mypic.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Home = () => {
  const data = {
    day: 'Today',
    amount_balance: 19892,
    year_to_date_contribution: 400,
    total_interest: 1892,
    bank_acc:"xxx11",
  };
  return (
    <div className='card'>
      <div>
        <div className='image-card'>
          <img src={IMG} alt='pic' />
          <div>
            <h1>Hi Mike,</h1>
            <span>welcome back</span>
          </div>
        </div>
        <div className='card-data'>
          <Card className='data' sx={{ minWidth: 275 }}>
            <CardContent>
              <ul>
                <li>{data.day}</li>
                <li>{<h1>${data.amount_balance}</h1>}Account Balance</li>
                <li>{<h1>${data.year_to_date_contribution}</h1>}Year-to-Date Contributions</li>
                <li>{<h1>${data.total_interest}</h1>}Total Interest</li>
                <div className='subdata'>
                <h3>Recent Transaction</h3>
                <li>{<h5>{(new Date(8.64e15,).toString())}</h5>}</li>
                <li>Withdrawal Transfer to Bank-{data.bank_acc}</li>
                </div>
              </ul>
            </CardContent>
            <CardActions>
              <Button size='small'>I want to</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
