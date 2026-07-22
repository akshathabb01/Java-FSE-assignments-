package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry(String code){

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        String[] beans={
                "country1",
                "country2",
                "country3",
                "country4"
        };

        for(String bean:beans){

            Country country=
                    context.getBean(bean,Country.class);

            if(country.getCode().equalsIgnoreCase(code))
                return country;

        }

        return null;

    }

}