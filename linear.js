
	function solution(a, b, n)
	{
		for (let i = 0; i * a <= n; i++)
		{
	
	
			if ((n - (i * a)) % b == 0)
			{
				document.write("x = " + i +
								", y = " +
								(n - (i * a)) / b);
				
				return ;
			}
		}
	
		document.write("No solution");
	}
    let a = 2, b = 3, n = 7;
    solution(a, b, n);


		
		
