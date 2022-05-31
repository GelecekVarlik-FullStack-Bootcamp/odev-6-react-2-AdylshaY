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

Kullanıcı kendi girdiği kullanıcı adı ve parola ile üye olabiliyor. Üye olduktan sonra login ekranına yönlendiriliyor ve tekrar giriş yapılması gerekiyor. 

Giriş yapıldıktan sonra sunucudan gelen veriden token bilgisi alınıyor ve local storage içerisinde saklanıyor. Diğer yapılacak tüm isteklerde bu token requestin header kısmında iletiliyor. 

Kullanıcı kategoriler sekmesine girerek öncelikle kategori ekliyor. Daha sonra bu kategori listesinin yan tarafında bulunan update butonu ile ilgili kategoriye statü ekleyebiliyor statünün rengini yazıyla giriyor.

Daha sonra todos sekmesine gelerek başlık, kategori ve statüsü seçerek bir todo ekleyebiliyor. Todo listesinde bulunan her todonun statü kısmının arkaplan rengi ilgili statünün rengine ait. Opaklığı yazıların görülmesi için azaltıldı.

Kategori ekleme ve silme, todo ekleme ve silme işlemleri yapılabiliyor. Kategoriler, statüler ve todolar yeniden düzenlenbiliyor. 

## Proje Ekran Görüntüleri
![Projeye ait ekran görüntüsü](/screenshots/home.png)
![Projeye ait ekran görüntüsü](/screenshots/login.png)
![Projeye ait ekran görüntüsü](/screenshots/register.png)
![Projeye ait ekran görüntüsü](/screenshots/todos.png)
![Projeye ait ekran görüntüsü](/screenshots/todoModal.png)
![Projeye ait ekran görüntüsü](/screenshots/categories.png)
![Projeye ait ekran görüntüsü](/screenshots/categoriesModal.png)
![Projeye ait ekran görüntüsü](/screenshots/gif1.gif)
![Projeye ait ekran görüntüsü](/screenshots/gif2.gif)

## Kullanımı

- Öncelikle [haandev/odevserver](https://github.com/haandev/odevserver) reposu klonlanır. Aynı zamanda docker'ın yüklü olması gerekiyor.
- Klonlanan dizine gelinir ve terminal açılır. docker-compose up komutu ile server çalıştırılır.
- Daha sonra bu react projesi klonlanır ve npm start komutu ile çalıştırılır. 

## Author

**Adylsha Yumayev**
