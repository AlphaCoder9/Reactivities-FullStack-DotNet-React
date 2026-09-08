using System;
using Domain; // needed because we used Activity.   
using MediatR; // gives us IRequest and IRequestHandler. We need to add a using statement for MediatR because we used IRequest and IRequestHandler.
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails //This is the outer class grouping the request + handler for the 'Get one Activity' use case.

{
    public class Query : IRequest<Activity> //This is the request class. It implements IRequest<T> where T is the type of the response. In this case, we want to return an Activity.
    {
        public required string Id { get; set; } //This is the property that will hold the id of the activity we want to get.
    }
    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity> //This is the handler class. It implements IRequestHandler<TRequest, TResponse> where TRequest is the type of the request and TResponse is the type of the response.
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken) //This is the method that will handle the request. It takes a Query object and a CancellationToken as parameters.
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken); //This line queries the database for the activity with the specified id. It uses the FindAsync method of the DbSet<Activity> class, which is provided by Entity Framework Core. The FindAsync method takes the id of the activity as a parameter and returns the activity if it exists, or null if it doesn't.

            if (activity == null) throw new Exception("Activity not found"); //If the activity is null, we throw an exception. This will be caught by the global exception handler and return a 404 Not Found response to the client.
            return activity;
        }
    }
}