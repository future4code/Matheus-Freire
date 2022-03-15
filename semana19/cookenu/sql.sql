
CREATE TABLE cookenu_users(
	id varchar(255) PRIMARY KEY,
    name varchar(255) not null,
    email varchar(255) not null ,
    password varchar(255) not null
);

create table receitas(
id varchar(255) primary key,
title varchar(255) not null,
description varchar(255) not null,
data date not null,
author_id varchar(255),
foreign key (author_id) references cookenu_users(id)
);


