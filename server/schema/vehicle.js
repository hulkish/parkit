import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql/type';

let count = 0;
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      type: {
        type: GraphQLInt,
        resolve: function() {
          return ++count;
        }
      }
    }
  })
});

export default schema;
