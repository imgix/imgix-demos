import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '@/lib/constants'
import Link from 'next/link';

type AlertProps = {
  preview: boolean,
};

const Alert = (props: AlertProps) => {
  const { preview } = props;
  return (

    <div>
      <div
        className={cn('border-b', {
          'bg-accent-7 border-accent-7 text-white': preview,
          'bg-accent-1 border-accent-2': !preview,
        })}
      >
        <Container>
          <div className="py-2 text-sm text-center">
            {preview ? (
              <>
                This is page is a preview.{' '}
                <Link
                  href="/api/exit-preview"
                  className="underline transition-colors duration-200 hover:text-cyan"
                >
                  Click here
                </Link>{' '}
                to exit preview mode.
              </>
            ) : (
              <>
                The source code for this blog is{' '}
                <a
                  href={`https://github.com/daletom`}
                  className="underline transition-colors duration-200 hover:text-success"
                >
                  available on GitHub
                </a>
                .
              </>
            )}
          </div>
        </Container>
      </div>
    </div>

  )
}


export default Alert;

