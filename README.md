# گزارش آزمایش ۹ درس مهندسی نرم‌افزار

برای انجام این آزمایش ما دو میکروسرویس validator , add را با یک دیتابیس مشترک mongo در نظر گرفته ایم. این سیستم به گونه ای طراحی شده است که ابتدا با کمک API call میکروسرویس validator اعداد ورودی را صحت سنجی میکنیم و در صورت صحت در دیتا بیس ذخیره خواهند شد و آیدی آن ها به کاربر برگردانده خواهد شد. در ادامه با کمک آیدی دو تا از اعداد برگردانده شده، می توان API میکروسرویس add را کال کرد تا حاصل جمع دو عدد مورد نظر را محاسبه کرده، در دیتابیس ذخیره کند و به ما برگرداند. برای هرکدام از ین میکروسرویس ها یک dockerfile مختص همان میکروسرویس ساخته ایم و در پوشه ی همان سرویس قرار داده ایم؛ همچنین یک فایل nginx  برای loadbalancing بین این میکروسرویس ها و ... در پروژه ساخته ایم که همگی این موارد در نهایت با کمک فایل docker compose در پروژه build و بعد از up اجرا خواند شد و می توان از قابلیت های سیستم ساخته شده استفاده کرد.
در ادامه نیز بخش های مختلف پروژه را آورده ایم:
سرویس validator:
![image_2024_01_05T13_54_49_837Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/2e8bd4f0-b547-40e7-8419-b25da03f0dfa)

سرویس add:
![image_2024_01_05T13_55_10_772Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/3580efc6-89d8-4107-94e1-7532f90da838)

نمایی از دیتابیس mongo ساخته شده به اسم appdb که شامل دو کالکشن number و result برای ذخیره داده هاست:
![image_2024_01_05T13_56_35_950Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/5d864742-0f7e-4afb-afc2-81ffc05d2ec0)

ست اپ nginx به منظور loadbalancing بین میکروسرویس ها و مدیریت فشار های احتمالی بر سرویس های مختلف ایجاد شده :
![image_2024_01_05T13_57_27_641Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/484ff7c7-44e3-4dc3-955a-ba4a5f971952)

فایل docker-compose نهایی به منظور build کردن و بالا اوردن تمامی میکروسرویس ها و... برای کار با سیستم طراحی شده:
![image_2024_01_05T13_58_24_169Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/0f232833-3afd-4c5c-89e5-5f49099c2781)

اجرای docker-compose build
![image_2024_01_05T13_59_44_111Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/11a487d0-5431-461e-8931-462f32bb2091)

اجرای docker-compose up
![image_2024_01_05T14_00_22_146Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/317b9b90-eda9-4402-abd6-ad701cd78408)

نمونه ای از کار با سرویس مورد نظر:
اعداد 33 و 50 را با کمک postman به سرویس validator  post میکنیم تا صحت سنجی و در دیتابیس ذخیره شوند:
![image_2024_01_05T14_02_44_231Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/a51a839c-8d66-4439-ac03-6e6c88f724dd)
![image_2024_01_05T14_02_09_711Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/e3484073-ddd9-4429-b58a-f9ee04409afa)
![image_2024_01_05T14_02_31_839Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/caa90814-2368-4397-9267-cabc5e176ebf)

با کمک آیدی های برگردانده شده یک request به سرویس add با کمک postman میزنیم تا بتوانیم حاصل جمع دو عدد مورد نظر را در پایگاه داده ذخیره کنیم و ببینیم:


![image_2024_01_05T14_04_02_881Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/d045e411-5ab4-481b-be2a-b68c35518bc1)
![image_2024_01_05T14_04_17_609Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/44bd0c53-ae5e-4326-aad6-4be3ca38b268)

وجودِ image ها و container های مربوط به سرویسها:
![image_2024_01_05T14_06_43_721Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/91b54065-6f9a-4bb9-960d-b34fab38b06a)
![image_2024_01_05T14_07_23_020Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/b21e619f-eafa-4f45-b541-ed5a0ae60a00)
![image_2024_01_05T14_06_23_765Z](https://github.com/yasamingol/SE_LAB_9/assets/59218135/78485963-12aa-4f94-88bb-af6b6e4932f9)

## سوال انتهای داک
حالت یا state ای که کاربر یا اپلیکیشن یا یک process در آن قرار دارد وضعیت یا حالات و کیفیتی است که در لحظه او دارد. 
در صورتی که یک اپلیکیشن stateful داشته باشیم این اپلیکیشن قابلیت این را دارد که اطلاعاتی که کاربر در اختیار آنها قرار می‌دهد را ذخیره کند و سپس را در اینترنت قرار دهد. در این اپلیکیشن ها سرور از هر سشن یوزر مطلع است و آن را مانیتور می‌کند. سرور در این نوع از اپلیکیشن ها ریکوئست ها و سایر کارهای یوزر را ضبط میکند که یوزر هم هر چند بار که بخواهد می‌تواند به آنها بازگردد و از آن اطلاعات استفاده کند. برای مثال اپلیکیشن های همراه بانک و سیستم های بانکی.
انگار تاریخچه ای از عملیاتی که کاربر در اپ انجام می‌دهد نگه‌ میدارند برای مثال چه نقل و انتقالات بانکی ای توسط یک کاربر انجام شده و نتیجه هر کدام چه بوده است.
یک اپلیکیشن یا process ای که stateless باشد برعکس حالتی که statefull باشد عمل می‌کند. هیچ دیتایی از عملیات‌هایی که انجام شده و هیچ تاریخچه ای نگه نمیدارد. هر عملیات از ابتدای کار دوباره انجام ‌میشود. اپلیکیشن‌هایی که stateless هستند یک سرویس را ارائه می‌دهند و از CDN ها یا سرور‌های وب برای ریکوئست‌های یکبار مصرفشان استفاده ‌می‌کنند. برای مثال سرچ آنلاین یک فرآیند stateless است. به ازای هر request یک response دریافت می‌کنیم.
در مورد پروژه ای که ما پیاده سازی کردیم، stateless بودن اینجا مشخص می شود که ما هر کدام از سرویس هایی که اضافه کرده ایم موجودیت مستقل دارد و به دیگری بستگی ندارد و هر دو به دیتایبس mongo وصل هستند. این دو سرویس هیچ process ای را با هم مشترکا انجام نمیدهند و کاملا از هم جدا هستند.
انگار هر request ای که میزنیم یک عملیات به تنهاییست.کانتینرهای داکر هم طوری طراحی شده اند که شبک باشند و اجازه این استقلال را به میکرو سرویس ها بدهند.
