import java.util.HashMap;
import java.util.Scanner;

public class HttpStatusCodes {

    public static void main(String[] args) {

        HashMap<Integer, String> statusCodes = new HashMap<>();

        // 1xx - Informational
        statusCodes.put(100, "Continue");
        statusCodes.put(101, "Switching Protocols");
        statusCodes.put(102, "Processing");
        statusCodes.put(103, "Early Hints");

        // 2xx - Success
        statusCodes.put(200, "OK");
        statusCodes.put(201, "Created");
        statusCodes.put(202, "Accepted");
        statusCodes.put(203, "Non-Authoritative Information");
        statusCodes.put(204, "No Content");
        statusCodes.put(205, "Reset Content");
        statusCodes.put(206, "Partial Content");

        // 3xx - Redirection
        statusCodes.put(300, "Multiple Choices");
        statusCodes.put(301, "Moved Permanently");
        statusCodes.put(302, "Found");
        statusCodes.put(303, "See Other");
        statusCodes.put(304, "Not Modified");
        statusCodes.put(307, "Temporary Redirect");
        statusCodes.put(308, "Permanent Redirect");

        // 4xx - Client Error
        statusCodes.put(400, "Bad Request");
        statusCodes.put(401, "Unauthorized");
        statusCodes.put(403, "Forbidden");
        statusCodes.put(404, "Not Found");
        statusCodes.put(405, "Method Not Allowed");
        statusCodes.put(408, "Request Timeout");
        statusCodes.put(409, "Conflict");
        statusCodes.put(410, "Gone");
        statusCodes.put(413, "Payload Too Large");
        statusCodes.put(415, "Unsupported Media Type");
        statusCodes.put(429, "Too Many Requests");

        // 5xx - Server Error
        statusCodes.put(500, "Internal Server Error");
        statusCodes.put(501, "Not Implemented");
        statusCodes.put(502, "Bad Gateway");
        statusCodes.put(503, "Service Unavailable");
        statusCodes.put(504, "Gateway Timeout");
        statusCodes.put(505, "HTTP Version Not Supported");

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter HTTP Status Code: ");
        int code = sc.nextInt();

        if (statusCodes.containsKey(code)) {
            System.out.println("Status Code: " + code);
            System.out.println("Meaning    : " + statusCodes.get(code));
        } else {
            System.out.println("Invalid or Unknown HTTP Status Code.");
        }

        sc.close();
    }
}
