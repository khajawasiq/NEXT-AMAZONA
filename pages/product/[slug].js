import React from "react";
import { useRouter } from "next/router";
import data from "../../Utils/data";
import Layout from "../../components/Layout";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";
import useStyles from "../../Utils/styles";
import Image from "next/image";
export default function ProductScreen() {
  const router = useRouter();
  const classes = useStyles();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return <div>product not found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}  >
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to products</Typography>{" "}
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant='h1'> {product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating:
                {product.rating} stars ( {product.numReviews} reviews){" "}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid item xs={6}>
                  <Typography> Price</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="primary"> ${product.price}</Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item xs={6}>
                  <Typography> status</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="primary">
                    {" "}
                    {product.countInStock > 0 ? "in stock " : "out of stock"}
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>   <Button fullWidth variant="contained" color="secondary">
                Add to Cart
              </Button></ListItem>
            
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
