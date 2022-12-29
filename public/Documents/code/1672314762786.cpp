#include <iostream>
#include <iomanip>
#include <list>
#include <string>
#include <string.h>
#include <vector>
#include <algorithm>

using namespace std;

class Book {
private:
	int id;
	string name, author, nhaSB;
	int year;

public:
	Book() {
		id = year = 0;
		name = author = nhaSB = "";
	}	

	Book(int id, string name, string author, int year, string nhaSB) {
		this->id = id;
		this->name = name;
		this->author = author;
		this->year = year;
		this->nhaSB = nhaSB;
	}
	
	int getYear() {
		return this->year;
	}
	friend istream& operator>>(istream& is, Book& A) {
		cout << "Nhap thong tin sach: " << endl;
		cout << "- Ma sach: "; is >> A.id;
		cout << "- Ten sach: ";
		is.ignore(1);
		getline(is, A.name);
		cout << "- Tac gia: ";
		fflush(stdin);
		
		getline(is, A.author);
		cout << "- Nam xuat ban: "; is >> A.year;
		cout << "- Nha XB: "; 
		is.ignore(1);
		getline(is, A.nhaSB);
		return is;
	}
	
	friend ostream& operator << (ostream& os, Book A) {
		os << A.id << "|\t" << A.name << "|\t" << A.author << 
		"|\t" << A.year << "|\t" << A.nhaSB;
		return os;
	}
};

bool cmp(Book A, Book B) {
		return A.getYear() < B.getYear();
}
class QLBook{ 
private:
	int num;
	Book* buff;

public:
	QLBook(){
		num = 0;
		buff = NULL;
	}
	QLBook(int n, Book* b){
		num = n;
		buff = b;
	}
	void input() {
		cout << "Nhap so luong sach: ";
		cin >> num;
		buff = new Book[num];
		
		for (int i = 0; i < num; i++) {
			cin >> buff[i];
		}		
	}
	
	QLBook findByYear(int year) {
		int count = 0;
		for (int i = 0; i < num; i++) {
			if (buff[i].getYear() == year) {
				count++;
			}
		}
		Book* res = new Book[count];
		for (int i = 0, j = 0; i < num; i++) {
			if (buff[i].getYear() == year) {
				res[j++] = buff[i];
			}
		}		
		return QLBook(count, res);
	}
	
	void Display() {
		cout << "Danh sach sach: \n";
		sort(buff, buff + num, cmp);
		for (int i = 0; i < num; i++)
			cout << buff[i] << endl;
	
	}
};
int main() {
	QLBook qlbook1, qlbook2;
	
	qlbook1.input();
	int y;
	cout << "Nhap nam can tim: "; cin >> y;
	qlbook2 = qlbook1.findByYear(y);

	qlbook2.Display();
	return 0;
}
