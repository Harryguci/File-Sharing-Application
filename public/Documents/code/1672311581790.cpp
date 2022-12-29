#include <stdio.h>
#include <math.h>
#include <string.h>

/*
Cau 2: Dinh nghia mot cau truc Sinh viên gom cac thanh phan: Ma SV, ten SV, nam sinh, 
diem.
Nhap, xuat n sinh vien.
- Tim sinh vien lon tuoi nhat trong lop.
- Nhap vao ma sinh vien, in ra man hinh thong tin cua sinh vien do.
- Nhap vao diem chuan, in ra man hinh nhung sinh vien trung tuyen.

*/

struct Thisinh {
	char ht[100];
	int ns, msv;
	float diem;
};

int main() {
	struct Thisinh arr[100];
	int n, ma;
	float diemChuan;
	
	printf("Nhap so luong thi sinh: ");
	scanf("%d", &n);
	printf("Nhap thong tin cac thi sinh: \n");
	for (int i = 0; i < n; i++) {
		printf("- Ho ten: ");
		fflush(stdin);
		gets(arr[i].ht);
		printf("- Nam sinh: ");
		scanf("%d", &arr[i].ns);
		printf("- Ma sv: ");
		scanf("%d", &arr[i].msv);
		printf("- Diem: ");
		scanf("%f",&arr[i].diem);
	}
	
	// In ra Danh sach vua nhap
	printf("\nDanh sach vua nhap: \n");
	for (int i = 0; i < n; i++) {
		printf("%d\t%s\t%d\t%d\t%.2f\n", i + 1, arr[i].ht, arr[i].msv, arr[i].ns, arr[i].diem);
	}
	Thisinh max = arr[0];
	for (int i = 0; i < n; i++) {
		if (arr[i].ns < max.ns) {
			max = arr[i];
		}
	}
	
	// Cau a
	printf("\nThi sinh lon tuoi nhat: \n");
	printf("\t%s\t%d\t%d\t%.2f", max.ht, max.msv, max.ns, max.diem);	


	// Cau b
	printf("\nMA SV can tim: ");
	scanf("%d", &ma);
	for (int i = 0; i < n; i++) {
		if (arr[i].msv == ma) {
			printf("\t%s\t%d\t%d\t%.2f\n", arr[i].ht, arr[i].msv, arr[i].ns, arr[i].diem);
		}
	}
	
	// Cau c
	printf("\nNhap diem chuan: "); scanf("%f", &diemChuan);
	printf("\nThi sinh do: \n");
	for (int i = 0; i < n; i++) {
		if (arr[i].diem > diemChuan) {
			printf("\t%s\t%d\t%d\t%.2f\n", arr[i].ht, arr[i].msv, arr[i].ns, arr[i].diem);
		}
	}
	return 0;
}
