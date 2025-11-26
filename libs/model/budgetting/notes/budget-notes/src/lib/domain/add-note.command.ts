/**
 * Command to add a note to a budget.
 * 
 * This command encapsulates all the data needed to add a note to a specific budget.
 * Following the CQRS pattern, commands are immutable data structures representing intent.
 */
export class AddNoteToBudgetCommand 
{
  /**
   * @param budgetId - The unique identifier of the budget to which the note will be added
   * @param note - The content of the note to be added
   * @param orgId - The organization ID to which the budget belongs
   * @param userId - The ID of the user adding the note
   */
  constructor(
    public readonly budgetId: string,
    public readonly note: string,
    public readonly orgId: string,
    public readonly userId: string
  ) {}
}
