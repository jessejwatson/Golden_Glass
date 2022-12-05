import ComingSoon from "../components/comingSoon";
import { GraphQLClient, gql } from 'graphql-request'
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  'https://api-ap-southeast-2.hygraph.com/v2/clazxnzw1231r01uhc0ke79zu/master'
  );

const QUERY = gql`
  {
    BlogPost{
      id,
      title,
      publishDate,
      slug,
      content {
        html
      }
      author {
        name,
        avatar {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function BlogList({posts}) {
    return (
      <div className='h-screen'>
        <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full'>
          <main>
            {posts.map((post) => (
              <BlogCard title={post.title}}/>
            ))}
          </main>
        </div>
      </div>
    )
  }