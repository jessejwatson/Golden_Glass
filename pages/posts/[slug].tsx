import { GraphQLClient, gql } from 'graphql-request'
import NavBar from '../../components/navBar';
import styles from "../../styles/Slug.module.css";
import Image from 'next/image'

const graphcms = new GraphQLClient(
    'https://api-ap-southeast-2.hygraph.com/v2/clazxnzw1231r01uhc0ke79zu/master'
);

const QUERY = gql
`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      id
      title
      publishDate
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
    {
        posts {
            slug
        }
    }
`;
  
export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST);

    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

  
export async function getStaticProps({ params }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});
    const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
    return (
        <main className={styles.Slug}>
            <div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    <img className=' w-2/3 h-80' src={post.coverImage.url}/>
                </div>
            </div>
        </main>
    )
}