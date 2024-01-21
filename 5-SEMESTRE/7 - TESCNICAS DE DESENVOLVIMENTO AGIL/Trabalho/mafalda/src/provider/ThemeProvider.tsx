import { ConfigProvider } from "antd"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "blue"
          }
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  )
}

export default ThemeProvider