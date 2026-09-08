using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity //outer class edit operation and it groupd two related classes, command and handler, together. The command class defines the request sent through MediatR, while the handler class processes that request and performs the necessary actions to edit an activity in the database.
{
	public class Command : IRequest //represent the request.
	{
		public required Activity Activity { get; set; }
	}

	public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command> // performs the actual logic for editing an activity. It implements the IRequestHandler interface, which requires a Handle method that takes in the Command request and a CancellationToken. The handler retrieves the activity from the database using the provided ID, updates its properties with the new values from the request, and saves the changes back to the database.
	{
		public async Task Handle(Command request, CancellationToken cancellationToken)
		{
			var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
             ?? throw new Exception("Cannot find activity");

             mapper.Map(request.Activity, activity);

             await context.SaveChangesAsync(cancellationToken);
             
		}
	}
}
