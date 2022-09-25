import Cors from "micro-cors";
import { gql, ApolloServer } from "apollo-server-micro";

export const config = {
	api: {
		bodyParser: false,
	},
};

const categories = [
	{
		name: "Laptop and Desktop",
		image: "/images/categories/category (8).png",
		subcategory: false,
		submenu: [
			{
				name: "Home Living",
				image: "/images/categories/category (1).png",
				subcategory: false,
			},
		],
	},
	{
		name: "Home Living",
		image: "/images/categories/category (1).png",
		subcategory: false,
	},
	{
		name: "Book And Stationary",
		image: "/images/categories/category (2).png",
		subcategory: true,
		submenu: [],
	},
	{
		name: "Home Appliances",
		image: "/images/categories/category (3).png",
		subcategory: false,
		submenu: [],
	},
	{
		name: "Book And Stationary",
		image: "/images/categories/category (4).png",
		subcategory: false,
	},
	{
		name: "Electronics Appliances",
		image: "/images/categories/category (5).png",
		subcategory: false,
		submenu: [],
	},
	{
		name: "Fast Food and Snacks",
		image: "/images/categories/category (6).png",
		subcategory: false,
	},
	{
		name: "More Categories",
		image: "/images/categories/category (7).png",
		subcategory: false,
		submenu: [],
	},
];

const typeDefs = gql`
	type categories {
		name: String
		image: String
		subcategory: Boolean
          
	}
	type Query {
		categories: [categories]
	}
`;
const resolvers = {
	Query: {
		categories: () => categories,
	},
};

const cors = Cors();

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {},
	introspection: true,
	playground: true,
});

const serversStart = apolloServer.start();

export default cors(async (req, res) => {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}
	await serversStart;
	await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
