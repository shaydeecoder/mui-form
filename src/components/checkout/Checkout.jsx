import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
  AppBar,
  Container,
  Toolbar,
  Paper,
  TextField,
  Grid,
  Typography,
  Link,
  Button,
  Box,
  Select,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

export default function Checkout() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (value) => {
    alert(JSON.stringify(value));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <React.Fragment>
        <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
          <Paper
            variant='outlined'
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant='h6' gutterBottom>
                Shipping address
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label='First name'
                    fullWidth
                    variant='standard'
                    {...register('firstName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label='Last name'
                    fullWidth
                    variant='standard'
                    {...register('lastName')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label='Address line'
                    fullWidth
                    variant='standard'
                    {...register('address')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel sx={{ textAlign: 'left' }}>Country</FormLabel>
                  <Select
                    required
                    label='Country'
                    fullWidth
                    variant='standard'
                    {...register('country')}
                  >
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='America'>America</MenuItem>
                    <MenuItem value='Nigeria'>Nigeria</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ my: 3 }}>
              <Typography variant='h6' gutterBottom>
                Payment method
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='Name on card'
                    fullWidth
                    variant='standard'
                    {...register('cardName')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='Card number'
                    fullWidth
                    variant='standard'
                    {...register('cardNumber')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='Expiry date'
                    fullWidth
                    variant='standard'
                    {...register('expDate')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='CVV'
                    helperText='Last three digits on signature strip'
                    fullWidth
                    variant='standard'
                    {...register('cvv')}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box>
              <RadioGroup
                defaultValue='payCard'
                row
                {...register('paymentType')}
              >
                <FormControlLabel
                  value='payCard'
                  control={<Radio />}
                  label='Pay by Card'
                />
                <FormControlLabel
                  value='payTransfer'
                  control={<Radio />}
                  label='Pay by Transfer'
                />
              </RadioGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox defaultChecked {...register('saveForLater')} />
                  }
                  label='Save the information for later'
                />
              </FormGroup>
            </Box>

            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, ml: 1 }}
              fullWidth
            >
              Purchase
            </Button>
          </Paper>
        </Container>
      </React.Fragment>
    </form>
  );
}
