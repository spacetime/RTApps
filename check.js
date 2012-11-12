/* A very stupid way to check if we have support for Parallel Arrays */

function checkRT()
{
	var pa = new ParallelArray([10,11,12,13,14]);
	if (typeof(pa) != "undefined")	
	{
		return true;
	}
}
