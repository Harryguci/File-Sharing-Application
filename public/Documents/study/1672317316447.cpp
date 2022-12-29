#include <stdio.h>
#include <math.h>
int main() {
	int n,i,dem = 0;
	float arr[100], max;
	scanf("%d", &n);
	for (i = 0; i < n; i++)
	{
		scanf("%f", &arr[i]);
	}
	max = arr[0]/n;
	for (i = 1; i < n; i++) {
		float value = arr[i] / (n * 1.0 - i);
		if (value > max) {
			max = value;
		}
	}	
	
	printf("max = %.2f", max);
}
