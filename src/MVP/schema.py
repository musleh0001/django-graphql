import graphene
import products.schema

# Out project level Schema
# if we had multiple app, we'd import them here
# Then inherit from their Queries and Mutation
# And finally returns them as one object


class Query(products.schema.Query, graphene.ObjectType):
    # this class will inherit from multiple Queries
    # as we begin to add more apps to out product
    pass


class Mutation(products.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
