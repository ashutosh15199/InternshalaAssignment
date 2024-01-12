import React, { useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { useDrawingArea } from '@mui/x-charts/hooks'
import { styled } from '@mui/system'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import './data.css'

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20
}))

function PieCenterLabel ({ children }) {
  const { width, height, left, top } = useDrawingArea()
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  )
}

const PieChartWithCenterLabel = ({ percentage }) => {
  const data = [{ value: percentage }, { value: 100 - percentage }]

  return (
    <PieChart series={[{ data, innerRadius: 55 }]} width={250} height={200} />
  )
}

const LinearProgressWithLabel = ({ value }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          value
        )}% `}</Typography>
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
}

const Data = () => {
  const [ageGroup, setAgeGroup] = useState('under30')
  const [salaryGroup, setSalaryGroup] = useState('low')
  const [gender, setGender] = useState('male')

  const handleAgeChange = event => {
    setAgeGroup(event.target.value)
  }

  const handleSalaryChange = event => {
    setSalaryGroup(event.target.value)
  }

  const handleGenderChange = event => {
    setGender(event.target.value)
  }

  const proData = {
    employee: 12,
    retirementAge: 65,
    employer_contribution: 8.4,
    intrest_rate: 5
  }

  return (
    <Container
      maxWidth='xl'
      sx={{
        backgroundColor: 'white',
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Paper sx={{ padding: 2, backgroundColor: 'white', marginBottom: 2,marginTop:-15 }}>
  <div className="mt-2" style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5'>How do I compare to my peers</Typography>
        <Typography variant='subtitle1'>
          These numbers represent current goal achievement
        </Typography>
        <label htmlFor='age'>Age:</label>
        <select
          id='age'
          value={ageGroup}
          onChange={handleAgeChange}
          style={{ width: '100%', marginBottom: 1 }}
        >
          <option value='under30'>Under 30</option>
          <option value='above30'>Above 30</option>
        </select>

        <label htmlFor='salary'>Salary:</label>
        <select
          id='salary'
          value={salaryGroup}
          onChange={handleSalaryChange}
          style={{ width: '100%', marginBottom: 1 }}
        >
          <option value='low'>K20-K30</option>
          <option value='high'>K50-K60</option>
        </select>

        <label htmlFor='gender'>Gender:</label>
        <select
          id='gender'
          value={gender}
          onChange={handleGenderChange}
          style={{ width: '100%', marginBottom: 2 }}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        </div>
      </Paper>

      <Paper sx={{ padding: 2, backgroundColor: 'lightgrey', marginBottom: 2 }}>
        <div
          className='mt-2'
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: 5,
              padding: 15,
              // marginTop: 0.5
            }}
          >
            <span>
              <PieChartWithCenterLabel percentage={78} />
              <Typography variant='h6'>Average</Typography>
            </span>
            <span>
              <PieChartWithCenterLabel percentage={95} />
              <Typography variant='h6'>Top</Typography>
            </span>
            <span>
              <PieChartWithCenterLabel percentage={59} />
              <Typography variant='h6'>Me</Typography>
            </span>
          </div>
          <div>
            <Typography variant='h6' sx={{ padding: 2 }}>
              Retirement Strategy
            </Typography>
            <Box sx={{ width: '100%', marginBottom: 2 }}>
              <span style={{ marginBottom: 10 }}>
                <Typography variant='h6'>Employee Contribution</Typography>
                <LinearProgressWithLabel value={proData.employee} />
              </span>
            </Box>
            <Box sx={{ width: '100%' }}>
              <span>
                <Typography variant='h6'>Retirement Age</Typography>
                <LinearProgressWithLabel value={proData.retirementAge} />
              </span>
            </Box>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <span>
              <Typography variant='h6'>
                Employer Contribution - {proData.employer_contribution}%
              </Typography>
            </span>
            <span>
              <Typography variant='h6'>
                Interest Rate - {proData.intrest_rate}%
              </Typography>
            </span>
          </div>
          <Button
            variant='contained'
            disableElevation
            sx={{ width: '100%', marginTop: 2 }}
          >
            Update
          </Button>
          <Button size='small' sx={{ width: '100%', marginTop: 1 }}>
            Learn More
          </Button>
        </div>
      </Paper>

      <Card
        sx={{
          minWidth: 275,
          borderLeft: '4px solid blue',
          backgroundColor: 'lightgrey'
          // marginTop: 2,
        }}
      >
        <CardContent>
          <Typography variant='h6'>
            Are you considering a Housing Advance?
          </Typography>
          <Typography variant='body2' sx={{ mb: 1.5 }}>
            Limited time reduced interest.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Data
