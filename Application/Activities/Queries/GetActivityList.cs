using System;
using Domain; // needed because we used Activity.
using MediatR; // gives us IRequest and IRequestHandler. We need to add a using statement for MediatR because we used IRequest and IRequestHandler.
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList //Outer, Container class. it groups the related > Query, Handler. 
{ //When somebodyasks for the list of activities, MediatR should sent that request to this handler, and thius handler should query the database.
    public class Query : IRequest<List<Activity>> {}

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>> //List<Actiovity> lives in Domain/Activity.cs. We need to add a using statement for Domain because we used Activity.
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken) //CancellationToek > If the original request gets cancelled, stop doing unnecessary work if possible.
        {
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}