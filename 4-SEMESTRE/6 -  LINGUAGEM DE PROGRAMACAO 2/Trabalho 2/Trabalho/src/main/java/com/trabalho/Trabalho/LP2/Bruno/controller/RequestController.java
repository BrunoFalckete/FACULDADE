package com.trabalho.Trabalho.LP2.Bruno.controller;

import com.trabalho.Trabalho.LP2.Bruno.HttpRequest.*;
import com.trabalho.Trabalho.LP2.Bruno.record.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests")
public class RequestController {

    @Autowired
    private final SupplierRequest supplierRequest;
    private final ProductRequest productRequest;
    private final CategoryRequest categoryRequest;
    private final CustomerRequest customerRequest;
    private final RoleRequest roleRequest;
    private final StockRequest stockRequest;

    private final PostRequest postRequest;

    private final CommentRequest commentRequest;

    public RequestController(SupplierRequest supplierRequest, ProductRequest productRequest, CategoryRequest categoryRequest, CustomerRequest customerRequest, RoleRequest roleRequest, StockRequest stockRequest, PostRequest postRequest, CommentRequest commentRequest) {
        this.supplierRequest = supplierRequest;
        this.productRequest = productRequest;
        this.categoryRequest = categoryRequest;
        this.customerRequest = customerRequest;
        this.roleRequest = roleRequest;
        this.stockRequest = stockRequest;
        this.postRequest = postRequest;
        this.commentRequest = commentRequest;
    }

    @GetMapping("/suppliers")
    public List<Supplier> getSuppliers() {
        return supplierRequest.getSuppliers();
    }

    @GetMapping("/suppliers/{id}")
    public Supplier getSupplierById(@PathVariable("id") long id) {
        return supplierRequest.getSupplierById(id);
    }

    @PostMapping("/suppliers")
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return supplierRequest.createSupplier(supplier);
    }

    @PutMapping("/suppliers/{id}")
    public Supplier updateSupplier(@PathVariable("id") long id, @RequestBody Supplier supplier) {
        return supplierRequest.updateSupplier(id, supplier);
    }

    @DeleteMapping("/suppliers/{id}")
    public void deleteSupplier(@PathVariable("id") long id) {
        supplierRequest.deleteSupplier(id);
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRequest.getProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable("id") long id) {
        return productRequest.getProductById(id);
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return productRequest.createProduct(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
        return productRequest.updateProduct(id, product);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable("id") long id) {
        productRequest.deleteProduct(id);
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return categoryRequest.getCategories();
    }

    @GetMapping("/categories/{id}")
    public Category getCategoryById(@PathVariable("id") long id) {
        return categoryRequest.getCategoryById(id);
    }

    @PostMapping("/categories")
    public Category createCategory(@RequestBody Category category) {
        return categoryRequest.createCategory(category);
    }

    @PutMapping("/categories/{id}")
    public Category updateCategory(@PathVariable("id") long id, @RequestBody Category category) {
        return categoryRequest.updateCategory(id, category);
    }

    @DeleteMapping("/categories/{id}")
    public void deleteCategory(@PathVariable("id") long id) {
        categoryRequest.deleteCategory(id);
    }

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return customerRequest.getCustomers();
    }

    @GetMapping("/customers/{id}")
    public Customer getCustomerById(@PathVariable("id") long id) {
        return customerRequest.getCustomerById(id);
    }

    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRequest.createCustomer(customer);
    }

    @PutMapping("/customers/{id}")
    public Customer updateCustomer(@PathVariable("id") long id, @RequestBody Customer customer) {
        return customerRequest.updateCustomer(id, customer);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable("id") long id) {
        customerRequest.deleteCustomer(id);
    }

    @GetMapping("/roles")
    public List<Role> getRoles() {
        return roleRequest.getRoles();
    }

    @GetMapping("/roles/{id}")
    public Role getRoleById(@PathVariable("id") long id) {
        return roleRequest.getRoleById(id);
    }

    @PostMapping("/roles")
    public Role createRole(@RequestBody Role role) {
        return roleRequest.createRole(role);
    }

    @PutMapping("/roles/{id}")
    public Role updateRole(@PathVariable("id") long id, @RequestBody Role role) {
        return roleRequest.updateRole(id, role);
    }

    @DeleteMapping("/roles/{id}")
    public void deleteRole(@PathVariable("id") long id) {
        roleRequest.deleteRole(id);
    }

    @GetMapping("/stocks")
    public List<Stock> getStocks() {
        return stockRequest.getStocks();
    }

    @GetMapping("/stocks/{id}")
    public Stock getStockById(@PathVariable("id") long id) {
        return stockRequest.getStockById(id);
    }

    @PostMapping("/stocks")
    public Stock createStock(@RequestBody Stock stock) {
        return stockRequest.createStock(stock);
    }

    @PutMapping("/stocks/{id}")
    public Stock updateStock(@PathVariable("id") long id, @RequestBody Stock stock) {
        return stockRequest.updateStock(id, stock);
    }

    @DeleteMapping("/stocks/{id}")
    public void deleteStock(@PathVariable("id") long id) {
        stockRequest.deleteStock(id);
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postRequest.getPosts();
    }

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable("id") long id) {
        return postRequest.getPostById(id);
    }

    @PostMapping("/posts")
    public Post createPost(@RequestBody Post post) {
        return postRequest.createPost(post);
    }

    @PutMapping("/posts/{id}")
    public Post updatePost(@PathVariable("id") long id, @RequestBody Post post) {
        return postRequest.updatePost(id, post);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable("id") long id) {
        postRequest.deletePost(id);
    }

    @GetMapping("/comments")
    public List<Comment> getComments() {
        return commentRequest.getComments();
    }

    @GetMapping("/comments/{id}")
    public Comment getCommentById(@PathVariable("id") long id) {
        return commentRequest.getCommentById(id);
    }

    @PostMapping("/comments")
    public Comment createComment(@RequestBody Comment comment) {
        return commentRequest.createComment(comment);
    }

    @PutMapping("/comments/{id}")
    public Comment updateComment(@PathVariable("id") long id, @RequestBody Comment comment) {
        return commentRequest.updateComment(id, comment);
    }

    @DeleteMapping("/comments/{id}")
    public void deleteComment(@PathVariable("id") long id) {
        commentRequest.deleteComment(id);
    }
}