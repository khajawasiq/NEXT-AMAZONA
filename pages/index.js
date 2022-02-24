import { Button, Card, CardActionArea, CardActions, CardMedia, Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import data from '../Utils/data';
import NextLink from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>
          products
        </h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img" 
                    image={product.image}
                     title={product.name}>
                  </CardMedia>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size='small' color ='primary'>Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
             ))}
             </Grid>
   </div>
    </Layout>
  )
}
