# Hafta - 6

# ToDo App


## İsterler

  - Kullanıcının kendisi kayıt olabilmeli ve daha sonra giriş yapabilmeli.
  - Kullanıcı kendi isteğine göre kategoriler ekleyebilmeli.
  - Her kategori için istenen sayıda statü eklenebilmeli.
  - Todo listesine bir task eklerken açıklama, kategori ve statü seçilmeli.
  - Tüm bunlar sonradan güncellenebilmeli.
 
## Proje Hakkında
**Kullanılan Teknolojiler:**   React

Projede derslerin eğitmeni tarafından verilen image docker ile ayağa kaldırıldı. Tüm api istekleri docker'da çalıştırılan bu server'a yapılıyor. İlgili repository: [haandev/odevserver](https://github.com/haandev/odevserver)

Kullanıcı kendi girdiği kullanıcı adı ve parola ile giriş yapabiliyor.

Giriş yaptıktan sonra token local storage içerisinde saklanıyor ve diğer isteklerde buradan alınarak kullanılıyor.

Kategori ekleme ve silme, todo ekleme ve silme işlemleri yapılabiliyor. Kategoriler, statüler ve todolar yeniden düzenlenbiliyor. 

## Proje Ekran Görüntüleri
![Projeye ait ekran görüntüsü](/screenshots/home.png)
![Projeye ait ekran görüntüsü](/screenshots/login.png)
![Projeye ait ekran görüntüsü](/screenshots/register.png)
![Projeye ait ekran görüntüsü](/screenshots/todos.png)
![Projeye ait ekran görüntüsü](/screenshots/todosModal.png)
![Projeye ait ekran görüntüsü](/screenshots/categories.png)
![Projeye ait ekran görüntüsü](/screenshots/categoriesModal.png)

## Kullanımı

- Öncelikle [haandev/odevserver](https://github.com/haandev/odevserver) reposu klonlanır. Aynı zamanda docker'ın yüklü olması gerekiyor.
- Klonlanan dizine gelinir ve terminal açılır. docker-compose up komutu ile server çalıştırılır.
- Daha sonra bu react projesi klonlanır ve npm start komutu ile çalıştırılır. 

## Author

**Adylsha Yumayev**
