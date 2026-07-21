# Hands-On 4: Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA stands for Java Persistence API.
- It is a specification (JSR 338) for managing relational data in Java applications.
- JPA defines interfaces and annotations but does not provide an implementation.
- Hibernate, EclipseLink, and OpenJPA are implementations of JPA.

### Advantages
- Standard API for persistence.
- Database independent.
- Easy object-relational mapping using annotations.

---

## Hibernate

- Hibernate is an Object Relational Mapping (ORM) framework.
- It is one of the most popular implementations of JPA.
- Hibernate converts Java objects into database records automatically.
- It provides additional features beyond JPA.

### Advantages
- Automatic table mapping.
- HQL (Hibernate Query Language).
- Caching support.
- Lazy loading.
- Transaction management.

---

## Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It reduces boilerplate code.
- It internally uses a JPA implementation such as Hibernate.
- CRUD operations can be performed without writing SQL.

### Advantages
- Minimal code.
- Automatic repository implementation.
- Built-in CRUD methods.
- Easy pagination and sorting.
- Better integration with Spring Boot.

---

# Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| SQL Generation | No | Yes | Yes (through Hibernate) |
| Boilerplate Code | High | Medium | Very Low |
| CRUD Operations | Manual | Manual | Automatic |

---

## Hibernate Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.save(employee);
tx.commit();
session.close();
```

---

## Spring Data JPA Example

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

## Conclusion

- JPA is a specification.
- Hibernate is an implementation of JPA.
- Spring Data JPA is a Spring framework that simplifies working with JPA by reducing boilerplate code.